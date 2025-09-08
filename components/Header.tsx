
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="py-6 sm:py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <SparklesIcon className="w-8 h-8 text-indigo-400" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            AI Ad Creator
          </h1>
        </div>
        <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">
          Transform your product photos into stunning, professional advertisements in seconds.
        </p>
      </div>
    </header>
  );
};

export default Header;
