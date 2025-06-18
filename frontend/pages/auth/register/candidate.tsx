import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

const educationLevels = [
  'MBO',
  'HBO',
  'WO',
  'Anders'
]

const industries = [
  'Facility Management',
  'Zorg',
  'Onderwijs',
  'Overheid',
  'IT',
  'Anders'
]

export default function CandidateRegistration() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationLevel: '',
    education: '',
    privacyAccepted: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: 'candidate',
          educationLevel: formData.educationLevel,
          education: formData.education
        }),
      })

      if (response.ok) {
        router.push('/code-invoer?email=' + encodeURIComponent(formData.email))
      }
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <Layout>
      <div className="fixed inset-0 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-y-auto z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Maak je account aan
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vul je gegevens in om verder te gaan
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Voornaam
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Achternaam
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
                  Opleidingsniveau
                </label>
                <select
                  name="educationLevel"
                  id="educationLevel"
                  required
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecteer opleidingsniveau</option>
                  {educationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Type opleiding
                </label>
                <select
                  name="education"
                  id="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecteer type opleiding</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  id="privacyAccepted"
                  required
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyAccepted" className="ml-2 block text-sm text-gray-900">
                  Ik ga akkoord met de{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-500">
                    privacyverklaring
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Volgende
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
} 