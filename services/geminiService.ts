import { GoogleGenAI, Modality } from "@google/genai";
import type { UploadedImage } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAdImage = async (
  productImage: UploadedImage,
  prompt: string,
  style: string,
  dimension: string,
  adText: string,
): Promise<string> => {
  try {
    let fullPrompt = `Generate a high-quality product advertisement image.
    Style: ${style}.
    Dimension/Aspect Ratio: ${dimension}.
    Instructions: ${prompt}.
    The provided image is the product to feature. Integrate it seamlessly and naturally into a new, cohesive scene based on the instructions.
    Do not just add a simple background to the original image. Create a completely new, compelling visual that highlights the product.`;

    if (adText && adText.trim()) {
        fullPrompt += `\n\nAd Text to include: "${adText.trim()}".
Please incorporate this text into the ad. Choose a font style, size, and placement that is aesthetically pleasing and complements the overall ad style (${style}). The text should be legible, stylish, and well-integrated into the design.`;
    } else {
        fullPrompt += `\nThe final image must not contain any text.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: productImage.base64,
              mimeType: productImage.mimeType,
            },
          },
          {
            text: fullPrompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    
    // Check for text response if no image is found
    if(response.text) {
        throw new Error(`The model returned a text response instead of an image: ${response.text}`);
    }

    throw new Error('No image data found in the API response.');
  } catch (error) {
    console.error('Error generating ad image:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate ad: ${error.message}`);
    }
    throw new Error('An unknown error occurred while generating the ad.');
  }
};