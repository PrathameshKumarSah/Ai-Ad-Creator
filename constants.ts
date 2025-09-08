
import { AdDimension, AdStyle } from './types';

export const AD_DIMENSIONS: AdDimension[] = [
  AdDimension.SQUARE,
  AdDimension.VERTICAL,
  AdDimension.LANDSCAPE,
  AdDimension.PORTRAIT,
];

export const AD_STYLES: AdStyle[] = [
  AdStyle.PHOTOREALISTIC,
  AdStyle.THREE_D,
  AdStyle.CARTOON,
  AdStyle.VINTAGE,
  AdStyle.MINIMALIST,
  AdStyle.FUTURISTIC,
];

export const AD_PROMPT_TEMPLATES: string[] = [
  'A dynamic ad placing the product on a clean, modern background with soft, professional lighting.',
  'An ad showing the product in a natural, outdoor setting like a sun-drenched forest or a serene beach.',
  'An eye-catching advertisement with vibrant, abstract shapes and splashes of color surrounding the product.',
  'A lifestyle ad showing a person happily using the product in a realistic, everyday scenario.',
  'A luxurious ad with the product displayed on a marble pedestal with dramatic, cinematic lighting.',
];
