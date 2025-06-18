import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const userTypes = [
  { id: 'student', label: '🎓 Student', description: 'Ik ben een student op zoek naar een stage of bijbaan' },
  { id: 'young-pro', label: '🚀 Young professional', description: 'Ik ben net afgestudeerd en op zoek naar mijn eerste baan' },
  { id: 'professional', label: '👔 Professional', description: 'Ik heb al werkervaring en ben op zoek naar een nieuwe uitdaging' },
  { id: 'employer', label: '🏢 Opdrachtgever', description: 'Ik wil personeel werven voor mijn organisatie' }
]

export default function SelectUserType() {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedType === 'employer') {
      router.push('/auth/register/employer')
    } else {
      router.push('/auth/register/candidate')
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Wie ben jij?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Selecteer je profiel om verder te gaan
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {userTypes.map((type) => (
                  <div key={type.id} className="relative">
                    <input
                      type="radio"
                      id={type.id}
                      name="userType"
                      value={type.id}
                      checked={selectedType === type.id}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={type.id}
                      className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="flex items-center">
                        <div className="text-lg font-medium">{type.label}</div>
                      </div>
                      <div className="text-sm text-gray-500">{type.description}</div>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!selectedType}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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