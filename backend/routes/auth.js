const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const { Resend } = require('resend');
const prisma = require('../lib/prisma');
const jwt = require('jsonwebtoken');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Register route
router.post('/register', async (req, res) => {
  const { email, firstName, lastName, role, educationLevel, education } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is al in gebruik' });
    }

    // Generate verification code
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name: `${firstName} ${lastName}`,
        role: role.toUpperCase(),
        candidate: role.toUpperCase() === 'CANDIDATE' ? {
          create: {
            educationLevel,
            industry: education
          }
        } : undefined
      }
    });

    // Send verification email
    await resend.emails.send({
      from: 'Facilitaire Dashboard <noreply@undsqvrd.nl>',
      to: email,
      subject: 'Verifieer je email',
      html: `
        <h1>Welkom bij het Facilitaire Dashboard!</h1>
        <p>Je verificatiecode is: <strong>${verificationCode}</strong></p>
        <p>Gebruik deze code om je account te verifiëren.</p>
      `
    });

    res.status(201).json({ message: 'Account aangemaakt. Check je email voor de verificatiecode.' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Er is een fout opgetreden bij het registreren' });
  }
});

// Check email route
router.post('/check-email', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'E-mailadres is verplicht' });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.json({ exists: false });
    }

    res.json({ 
      exists: true,
      role: user.role
    });
  } catch (error) {
    console.error('Check email error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij het controleren van het e-mailadres' });
  }
});

// Request code route
router.post('/request-code', async (req, res) => {
  try {
    const { email, role } = req.body;

    if (!email || !role) {
      return res.status(400).json({ message: 'E-mailadres en rol zijn verplicht' });
    }

    let user = await prisma.user.findUnique({
      where: { email }
    });

    // Als gebruiker niet bestaat, maak aan
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          role: role.toUpperCase(), // 'CANDIDATE' of 'EMPLOYER'
        }
      });
    }

    // Generate verification code
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minuten geldig

    console.log('Generated code:', { email, code, expiresAt });

    // Save code in database
    const savedCode = await prisma.verificationCode.create({
      data: {
        email,
        code,
        expiresAt
      }
    });

    console.log('Saved verification code:', savedCode);

    // Send verification email
    const { data: mailData, error } = await resend.emails.send({
      from: 'Facilitaire Dashboard <noreply@undsqvrd.nl>',
      to: email,
      subject: 'Verificatiecode',
      html: `
        <h1>Verificatiecode</h1>
        <p>Je verificatiecode is: <strong>${code}</strong></p>
        <p>Gebruik deze code om je account te verifiëren.</p>
      `
    });

    if (error) {
      console.error('Resend email error:', error);
      return res.status(500).json({ message: 'Er is iets misgegaan bij het versturen van de e-mail' });
    }

    console.log('Email sent successfully:', mailData);
    res.json({ message: 'Verificatiecode verzonden' });
  } catch (error) {
    console.error('Request code error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij het aanvragen van de verificatiecode' });
  }
});

// Verify code route
router.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;
  console.log('Verificatie poging ontvangen:', { email, code });

  if (!email || !code) {
    console.log('Ongeldige request: email of code ontbreekt');
    return res.status(400).json({ message: 'Email en code zijn verplicht' });
  }

  try {
    // Haal de gebruiker op
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        candidate: true,
        employer: true
      }
    });

    if (!user) {
      console.log('Gebruiker niet gevonden:', email);
      return res.status(404).json({ message: 'Gebruiker niet gevonden' });
    }

    // Haal de verificatiecode op
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        email: email,
        code: code,
        expiresAt: {
          gt: new Date()
        }
      }
    });

    console.log('Verificatiecode check:', { 
      email: email, 
      code: code, 
      found: !!verificationCode 
    });

    if (!verificationCode) {
      console.log('Ongeldige of verlopen code');
      return res.status(400).json({ message: 'Ongeldige of verlopen code' });
    }

    // Verwijder de gebruikte code
    await prisma.verificationCode.delete({
      where: { id: verificationCode.id }
    });

    // Genereer JWT token
    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Verificatie succesvol, token gegenereerd');

    // Stuur response met token en user data
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        candidate: user.candidate,
        employer: user.employer
      }
    });
  } catch (error) {
    console.error('Verificatie error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij het verifiëren van de code' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        candidate: true,
        employer: true
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'Ongeldige inloggegevens' });
    }

    // Vergelijk wachtwoord
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Ongeldige inloggegevens' });
    }
    
    // Maak JWT token aan
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij het inloggen' });
  }
});

// Candidate registratie route
router.post('/register/candidate', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, educationLevel, industry, privacyAccepted } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Dit e-mailadres is al geregistreerd' });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name: `${firstName} ${lastName}`,
        role: 'CANDIDATE',
        candidate: {
          create: {
            phone,
            educationLevel,
            industry,
            privacyAccepted
          }
        }
      }
    });

    // Stuur verificatie e-mail (implementeer dit later)
    // await sendVerificationEmail(email);

    res.status(201).json({ message: 'Registratie succesvol' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij de registratie' });
  }
});

// Employer registratie route
router.post('/register/employer', async (req, res) => {
  try {
    const {
      companyName,
      organizationType,
      industry,
      firstName,
      lastName,
      position,
      email,
      privacyAccepted
    } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Dit e-mailadres is al geregistreerd' });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name: `${firstName} ${lastName}`,
        role: 'EMPLOYER',
        employer: {
          create: {
            companyName,
            organizationType,
            industry,
            position,
            privacyAccepted
          }
        }
      }
    });

    // Stuur verificatie e-mail (implementeer dit later)
    // await sendVerificationEmail(email);

    res.status(201).json({ message: 'Registratie succesvol' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij de registratie' });
  }
});

// Resend code route
router.post('/resend-code', async (req, res) => {
  try {
  const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'E-mailadres is verplicht' });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(404).json({ message: 'Gebruiker niet gevonden' });
    }

    // Generate new verification code
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minuten geldig

    // Save new code in database
    await prisma.verificationCode.create({
      data: {
        email,
        code: verificationCode,
        expiresAt
      }
    });

    try {
      // Send verification email
      const { data, error } = await resend.emails.send({
        from: 'Facilitaire Dashboard <noreply@undsqvrd.nl>',
      to: email,
      subject: 'Nieuwe verificatiecode',
      html: `
        <h1>Nieuwe verificatiecode</h1>
        <p>Je nieuwe verificatiecode is: <strong>${verificationCode}</strong></p>
        <p>Gebruik deze code om je account te verifiëren.</p>
      `
    });

      if (error) {
        console.error('Resend email error:', error);
        return res.status(500).json({ message: 'Er is iets misgegaan bij het versturen van de e-mail' });
  }

      console.log('Email sent successfully:', data);
      res.json({ message: 'Nieuwe verificatiecode verzonden' });
    } catch (emailError) {
      console.error('Resend email error:', emailError);
      res.status(500).json({ message: 'Er is iets misgegaan bij het versturen van de e-mail' });
    }
  } catch (error) {
    console.error('Resend code error:', error);
    res.status(500).json({ message: 'Er is iets misgegaan bij het opnieuw versturen van de verificatiecode' });
  }
});

module.exports = router; 