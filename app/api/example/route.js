import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

/**
 * Example API route
 * Replace this with your actual API routes based on the MVP blueprint
 */
export async function GET() {
  try {
    // Example query
    const result = await query('SELECT NOW() as current_time')
    
    return NextResponse.json({
      message: 'Example API route',
      data: result.rows[0],
    })
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      message: 'POST request received',
      received: body,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

