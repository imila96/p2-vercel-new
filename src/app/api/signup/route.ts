import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, storeName } = body;

    // Here you would integrate with your backend or email service
    // For now, we'll just return a success response

    if (!email || !storeName) {
      return NextResponse.json(
        { error: 'Email and store name are required' },
        { status: 400 }
      );
    }

    // Simulate signup process
    return NextResponse.json({
      success: true,
      message: 'Signup successful! Check your email for next steps.',
      data: { email, storeName },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
