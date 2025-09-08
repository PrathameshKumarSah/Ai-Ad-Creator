
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';
import DownloadIcon from './icons/DownloadIcon';

interface GeneratedAdProps {
  generatedAd: string | null;
  isLoading: boolean;
  error: string | null;
}

const GeneratedAd: React.FC<GeneratedAdProps> = ({ generatedAd, isLoading, error }) => {
  const Placeholder = () => (
    <div className="flex flex-col items-center justify-center w-full h-full text-center text-slate-400">
      <SparklesIcon className="w-12 h-12 mb-4 text-slate-500" />
      <h3 className="text-lg font-semibold text-slate-300">Your Generated Ad Will Appear Here</h3>
      <p className="text-sm">Upload a product and describe your vision to get started.</p>
    </div>
  );
  
  const LoadingSpinner = () => (
      <div className="flex flex-col items-center justify-center w-full h-full text-center text-indigo-400">
          <svg className="animate-spin h-10 w-10 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 text-lg font-semibold">Creating your ad, please wait...</p>
            <p className="text-sm text-slate-400">This can take a moment.</p>
      </div>
  );

  const ErrorDisplay = ({ message }: { message: string }) => (
    <div className="flex flex-col items-center justify-center w-full h-full text-center text-red-400 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <h3 className="text-lg font-semibold text-red-300">Generation Failed</h3>
      <p className="text-sm">{message}</p>
    </div>
  );

  return (
    <div className="w-full aspect-square bg-slate-800 rounded-lg flex items-center justify-center p-2 relative group">
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorDisplay message={error} />}
      {!isLoading && !error && !generatedAd && <Placeholder />}
      {!isLoading && !error && generatedAd && (
        <>
          <img
            src={`data:image/png;base64,${generatedAd}`}
            alt="Generated advertisement"
            className="w-full h-full object-contain rounded-md"
          />
          <a
            href={`data:image/png;base64,${generatedAd}`}
            download="ai-generated-ad.png"
            className="absolute bottom-4 right-4 flex items-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-700"
          >
            <DownloadIcon className="w-5 h-5" />
            Download
          </a>
        </>
      )}
    </div>
  );
};

export default GeneratedAd;
