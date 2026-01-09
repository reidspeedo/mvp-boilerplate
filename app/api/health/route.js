import { NextResponse } from 'next/server'
import { testConnection } from '@/lib/db'

export async function GET() {
  const dbStatus = await testConnection()
  
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: dbStatus,
  })
}

