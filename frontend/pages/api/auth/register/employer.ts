import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { sendVerificationEmail } from '../../../../lib/email'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

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
    } = req.body

    // Controleer of het e-mailadres al bestaat
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(400).json({ message: 'Dit e-mailadres is al geregistreerd' })
    }

    // Maak een nieuwe gebruiker aan
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
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
    })

    // Stuur verificatie e-mail
    await sendVerificationEmail(email)

    return res.status(200).json({ message: 'Registratie succesvol' })
  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ message: 'Er is iets misgegaan bij de registratie' })
  }
} 