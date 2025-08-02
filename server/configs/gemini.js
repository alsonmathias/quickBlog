import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client with your API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  
  return response.text;
}

export default main;
