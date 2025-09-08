
import React, { useState, useCallback, ChangeEvent } from 'react';
import type { UploadedImage } from '../types';
import UploadIcon from './icons/UploadIcon';

interface ImageUploaderProps {
  onImageUpload: (image: UploadedImage) => void;
  uploadedImage: UploadedImage | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, uploadedImage }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        const base64 = dataUrl.split(',')[1];
        onImageUpload({ base64, mimeType: file.type, dataUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDragEvents = (e: React.DragEvent<HTMLLabelElement>, dragging: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(dragging);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    handleDragEvents(e, false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  }, []);

  const uploaderClasses = `flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300 ${isDragging ? 'border-indigo-400 bg-slate-700' : 'border-slate-600 bg-slate-800 hover:bg-slate-700'}`;

  return (
    <div className="w-full">
      {!uploadedImage ? (
        <label
          htmlFor="dropzone-file"
          className={uploaderClasses}
          onDragEnter={(e) => handleDragEvents(e, true)}
          onDragOver={(e) => handleDragEvents(e, true)}
          onDragLeave={(e) => handleDragEvents(e, false)}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadIcon className="w-10 h-10 mb-3 text-slate-400" />
            <p className="mb-2 text-sm text-slate-400">
              <span className="font-semibold text-indigo-400">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-slate-500">PNG, JPG, or WEBP</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={onInputChange} />
        </label>
      ) : (
        <div className="relative w-full h-64 rounded-lg overflow-hidden group">
          <img src={uploadedImage.dataUrl} alt="Product preview" className="w-full h-full object-contain" />
           <button 
                onClick={() => onImageUpload(null!)} 
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
