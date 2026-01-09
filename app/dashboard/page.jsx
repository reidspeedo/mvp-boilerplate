'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Protected dashboard page
 * Remove this file if not using authentication
 */
export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch user data from an API route
    // For now, this is just a placeholder
    setLoading(false)
  }, [])

  const handleLogout = () => {
    // Clear token cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/login')
  }

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        
        <div className="p-4 border rounded">
          <p>This is a protected dashboard page.</p>
          <p className="mt-2 text-gray-600">
            Replace this with your MVP-specific content.
          </p>
        </div>
      </div>
    </div>
  )
}

