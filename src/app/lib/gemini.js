import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = "AIzaSyBLLNhRmaAeTqunEaSdTLjcr7KTAhbxJic";

if (!apiKey) {
  throw new Error('Missing GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generatePromptResponse(userPrompt) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    const prompt = `Enhance and analyze the following prompt. Return the response in a clear format:
    "${userPrompt}"

    Focus on:
    1. Making it more specific and effective
    2. Providing alternative versions
    3. Analyzing its strengths and potential improvements
    4. Suggesting relevant keywords
    
    Important: Return only the raw JSON without any markdown formatting or code blocks. Format:
    {
      "enhancedPrompt": "improved version",
      "variations": ["variation1", "variation2", "variation3"],
      "analysis": {
        "strengths": ["strength1", "strength2"],
        "improvements": ["improvement1", "improvement2"]
      },
      "keywords": ["keyword1", "keyword2", "keyword3"],
      "category": "category type",
      "complexity": "difficulty level"
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Remove any markdown formatting if present
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();

    try {
      // Try to parse the cleaned text as JSON
      const parsedResult = JSON.parse(cleanText);
      return parsedResult;
    } catch (parseError) {
      // If parsing fails, return a structured response with the raw text
      console.error('Parse error:', parseError);
      return {
        enhancedPrompt: text,
        variations: [],
        analysis: {
          strengths: [],
          improvements: ["Could not parse structured response"]
        },
        keywords: [],
        category: "general",
        complexity: "basic"
      };
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error(`Generation failed: ${error.message}`);
  }
}