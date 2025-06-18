import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { signIn } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, code } = req.body

    if (!email || !code) {
      return res.status(400).json({ error: 'E-mail en code zijn verplicht' })
    }

    // Zoek de meest recente code
    const record = await prisma.verificationCode.findFirst({
      where: { email, code },
      orderBy: { createdAt: 'desc' }
    })

    if (!record) {
      return res.status(401).json({ error: 'Ongeldige code' })
    }

    // Check of code niet verlopen is (10 min)
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000)
    if (record.createdAt < tenMinutesAgo) {
      return res.status(401).json({ error: 'Code verlopen' })
    }

    // Zoek user en bepaal rol
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(404).json({ error: 'Gebruiker niet gevonden' })
    }

    // Verwijder gebruikte codes
    await prisma.verificationCode.deleteMany({
      where: { email }
    })

    // Log gebruiker in via NextAuth
    const result = await signIn('credentials', {
      email,
      code,
      redirect: false
    })

    if (result?.error) {
      return res.status(401).json({ error: result.error })
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    })

  } catch (error) {
    console.error('Error in verify-code:', error)
    return res.status(500).json({ error: 'Er is iets misgegaan' })
  }
} 