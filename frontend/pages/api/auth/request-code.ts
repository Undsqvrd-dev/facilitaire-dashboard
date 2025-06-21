import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'E-mail is verplicht' })
    }

    // Check of gebruiker bestaat
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (!existingUser) {
      return res.status(404).json({ 
        error: 'Gebruiker niet gevonden',
        redirectTo: '/auth/register',
        email 
      })
    }

    // Rate limiting: tel aanvragen in de laatste 10 minuten
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000)
    const recentRequests = await prisma.verificationCode.count({
      where: {
        email,
        createdAt: { gte: tenMinutesAgo }
      }
    })

    if (recentRequests >= 3) {
      return res.status(429).json({ 
        error: 'Je hebt het maximum aantal code-aanvragen bereikt. Probeer het later opnieuw.' 
      })
    }

    // Zoek naar een recente, geldige code
    const existingCode = await prisma.verificationCode.findFirst({
      where: {
        email,
        createdAt: { gte: tenMinutesAgo }
      }
    })

    if (existingCode) {
      return res.status(400).json({ 
        error: 'Er is al een geldige code verzonden. Probeer het later opnieuw.' 
      })
    }

    // Genereer 4-cijferige code
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString()

    // Sla op in database
    await prisma.verificationCode.create({
      data: { email, code: verificationCode }
    })

    // Verstuur e-mail
    await resend.emails.send({
      to: email,
      from: 'noreply@jouwdomein.nl',
      subject: 'Je verificatiecode',
      html: `
        <h1>Welkom terug!</h1>
        <p>Je verificatiecode is: <strong>${verificationCode}</strong></p>
        <p>Deze code is 10 minuten geldig.</p>
      `
    })

    return res.status(200).json({ 
      success: true,
      message: 'Verificatiecode verzonden'
    })

  } catch (error) {
    console.error('Error in request-code:', error)
    return res.status(500).json({ error: 'Er is iets misgegaan' })
  }
} 