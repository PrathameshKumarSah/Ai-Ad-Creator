
export enum AdDimension {
  SQUARE = '1:1 Square',
  VERTICAL = '9:16 Vertical Story',
  LANDSCAPE = '16:9 Landscape',
  PORTRAIT = '4:5 Portrait',
}

export enum AdStyle {
  PHOTOREALISTIC = 'Photorealistic',
  CARTOON = 'Cartoon',
  THREE_D = '3D Render',
  VINTAGE = 'Vintage',
  MINIMALIST = 'Minimalist',
  FUTURISTIC = 'Futuristic',
}

export interface UploadedImage {
  base64: string;
  mimeType: string;
  dataUrl: string;
}
