import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

const organizationTypes = [
  'Dienstverlener',
  'Afdeling'
]

const industries = [
  'Zorg',
  'Hospitality',
  'Onderwijs',
  'Overheid',
  'IT',
  'Facility Management',
  'Anders'
]

export default function EmployerRegistration() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    type: '',
    firstName: '',
    lastName: '',
    position: '',
    email: '',
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
          name: `${formData.firstName} ${formData.lastName}`,
          role: 'employer',
          subtype: formData.type,
          branch: formData.industry,
          type: formData.type,
          companyName: formData.companyName
        }),
      })

      if (response.ok) {
        router.push('/code-invoer?email=' + encodeURIComponent(formData.email))
      } else {
        const data = await response.json()
        console.error('Registration failed:', data.message)
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
      <div className="h-screen bg-gray-50 flex flex-col py-8 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Bedrijfsaccount aanmaken
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vul de gegevens van je organisatie in
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type organisatie
                </label>
                <select
                  name="type"
                  id="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecteer type organisatie</option>
                  <option value="Facilitair dienstverlener">Facilitair dienstverlener</option>
                  <option value="Facilitaire afdeling">Facilitaire afdeling</option>
                </select>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                  Branche
                </label>
                <select
                  name="industry"
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecteer branche</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

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
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Functie
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
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
                  Account aanmaken
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
} 