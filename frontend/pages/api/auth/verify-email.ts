import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { code } = req.body

    // Zoek de verificatiecode in de database
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
        expiresAt: {
          gt: new Date() // Code is nog niet verlopen
        }
      },
      orderBy: {
        createdAt: 'desc' // Meest recente code
      }
    })

    if (!verificationCode) {
      return res.status(400).json({ message: 'Ongeldige of verlopen verificatiecode' })
    }

    // Update de gebruiker als geverifieerd
    await prisma.user.update({
      where: {
        email: verificationCode.email
      },
      data: {
        emailVerified: new Date()
      }
    })

    // Verwijder de gebruikte verificatiecode
    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id
      }
    })

    return res.status(200).json({ message: 'E-mail succesvol geverifieerd' })
  } catch (error) {
    console.error('Verification error:', error)
    return res.status(500).json({ message: 'Er is iets misgegaan bij de verificatie' })
  }
} 