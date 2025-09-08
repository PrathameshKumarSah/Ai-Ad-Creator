import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import AdOptions from './components/AdOptions';
import GeneratedAd from './components/GeneratedAd';
import { AdDimension, AdStyle } from './types';
import type { UploadedImage } from './types';
import { AD_DIMENSIONS, AD_STYLES } from './constants';
import { generateAdImage } from './services/geminiService';

const App: React.FC = () => {
  const [productImage, setProductImage] = useState<UploadedImage | null>(null);
  const [adDimension, setAdDimension] = useState<AdDimension>(AD_DIMENSIONS[0]);
  const [adStyle, setAdStyle] = useState<AdStyle>(AD_STYLES[0]);
  const [adPrompt, setAdPrompt] = useState<string>('');
  const [adText, setAdText] = useState<string>('');
  
  const [generatedAd, setGeneratedAd] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!productImage || !adPrompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedAd(null);

    try {
      const result = await generateAdImage(productImage, adPrompt, adStyle, adDimension, adText);
      setGeneratedAd(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isGenerateDisabled = !productImage || !adPrompt.trim();

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Controls */}
          <div className="bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">2. Configure Your Ad</h2>
            <AdOptions
              dimension={adDimension}
              setDimension={setAdDimension}
              style={adStyle}
              setStyle={setAdStyle}
              prompt={adPrompt}
              setPrompt={setAdPrompt}
              adText={adText}
              setAdText={setAdText}
              onGenerate={handleGenerate}
              isLoading={isLoading}
              isGenerateDisabled={isGenerateDisabled}
            />
          </div>

          {/* Right Column: Image Uploader & Result */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-200">
                1. Upload Your Product Image
              </h3>
              <ImageUploader onImageUpload={setProductImage} uploadedImage={productImage} />
            </div>
             <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-200">
                3. Your Generated Ad
              </h3>
              <GeneratedAd generatedAd={generatedAd} isLoading={isLoading} error={error} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;