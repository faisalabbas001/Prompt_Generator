import { generatePromptResponse } from '@/app/lib/gemini';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
   
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Please enter a prompt' },
        { status: 400 }
      );
    }

    const result = await generatePromptResponse(prompt);
    
    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}