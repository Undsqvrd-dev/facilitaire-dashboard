import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { firstName, lastName, email, phone, educationLevel, industry, privacyAccepted } = req.body

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register/candidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
            phone,
            educationLevel,
            industry,
            privacyAccepted
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ message: 'Er is iets misgegaan bij de registratie' })
  }
} 