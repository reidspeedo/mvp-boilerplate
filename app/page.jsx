export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">MVP Boilerplate</h1>
        <p className="text-lg mb-8">
          Next.js boilerplate with Postgres, Docker, Auth, and Resend
        </p>
        
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copy <code className="bg-gray-100 px-2 py-1 rounded">.env.example</code> to <code className="bg-gray-100 px-2 py-1 rounded">.env</code></li>
              <li>Run <code className="bg-gray-100 px-2 py-1 rounded">docker-compose up</code></li>
              <li>Visit <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code></li>
            </ol>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js 14 with App Router</li>
              <li>PostgreSQL database</li>
              <li>Docker & Docker Compose</li>
              <li>JWT authentication (removable)</li>
              <li>Resend email integration (removable)</li>
              <li>TypeScript ready</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold mb-2">API Routes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="/api/health" className="text-blue-600 hover:underline">/api/health</a> - Health check</li>
              <li><a href="/api/example" className="text-blue-600 hover:underline">/api/example</a> - Example API route</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}



