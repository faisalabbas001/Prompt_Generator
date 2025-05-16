import { generatePromptResponse } from "@/app/lib/gemini";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt, type = 'improve' } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await generatePromptResponse(prompt, type);

    return NextResponse.json({ result });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to process prompt' },
      { status: 500 }
    );
  }
}