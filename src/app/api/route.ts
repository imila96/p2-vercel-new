import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Index 101 Clone API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      signup: '/api/signup',
      contact: '/api/contact',
    },
  });
}
