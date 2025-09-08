import React from 'react';
import { AD_DIMENSIONS, AD_STYLES, AD_PROMPT_TEMPLATES } from '../constants';
import { AdDimension, AdStyle } from '../types';
import SparklesIcon from './icons/SparklesIcon';

interface AdOptionsProps {
  dimension: AdDimension;
  setDimension: (dim: AdDimension) => void;
  style: AdStyle;
  setStyle: (style: AdStyle) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  adText: string;
  setAdText: (text: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  isGenerateDisabled: boolean;
}

const AdOptions: React.FC<AdOptionsProps> = ({
  dimension,
  setDimension,
  style,
  setStyle,
  prompt,
  setPrompt,
  adText,
  setAdText,
  onGenerate,
  isLoading,
  isGenerateDisabled,
}) => {
  const commonSelectClasses = "w-full p-3 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition";
  const commonLabelClasses = "block mb-2 text-sm font-medium text-slate-300";

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="dimension-select" className={commonLabelClasses}>a. Select Ad Dimension</label>
        <select id="dimension-select" value={dimension} onChange={(e) => setDimension(e.target.value as AdDimension)} className={commonSelectClasses}>
          {AD_DIMENSIONS.map((dim) => <option key={dim} value={dim}>{dim}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="style-select" className={commonLabelClasses}>b. Choose Ad Style</label>
        <select id="style-select" value={style} onChange={(e) => setStyle(e.target.value as AdStyle)} className={commonSelectClasses}>
          {AD_STYLES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      
      <div>
        <label htmlFor="prompt-textarea" className={commonLabelClasses}>c. Describe Your Ad</label>
        <textarea
          id="prompt-textarea"
          rows={4}
          className={`${commonSelectClasses} resize-y`}
          placeholder="e.g., A minimalist ad with the product floating over a calm lake at sunrise."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
         <div className="mt-2 flex flex-wrap gap-2">
            <p className="text-xs text-slate-400 mr-2 self-center">Or try a template:</p>
            {AD_PROMPT_TEMPLATES.slice(0, 2).map((template) => (
                <button
                    key={template}
                    onClick={() => setPrompt(template)}
                    className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded-md transition"
                >
                    Template {AD_PROMPT_TEMPLATES.indexOf(template) + 1}
                </button>
            ))}
        </div>
      </div>

      <div>
        <label htmlFor="adtext-textarea" className={commonLabelClasses}>d. Add Ad Text (Optional)</label>
        <textarea
          id="adtext-textarea"
          rows={3}
          className={`${commonSelectClasses} resize-y`}
          placeholder="e.g., '50% Off' or 'New Arrival'"
          value={adText}
          onChange={(e) => setAdText(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={onGenerate}
        disabled={isGenerateDisabled || isLoading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            Generate Ad
          </>
        )}
      </button>
    </div>
  );
};

export default AdOptions;