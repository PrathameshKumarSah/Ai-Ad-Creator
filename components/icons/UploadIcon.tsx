
import React from 'react';

const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a2.25 2.25 0 0 0-2.25 2.25v10.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V6a2.25 2.25 0 0 0-2.25-2.25Z"
      clipRule="evenodd"
    />
    <path
      d="M16.5 6.75a.75.75 0 0 0 0 1.5h1.13c.28 0 .5.22.5.5v10.5a.5.5 0 0 1-.5.5H6.38a.5.5 0 0 1-.5-.5V8.75a.5.5 0 0 1 .5-.5h1.13a.75.75 0 0 0 0-1.5H6.37A2 2 0 0 0 4.38 8.75v10.5a2 2 0 0 0 2 2h11.25a2 2 0 0 0 2-2V8.75a2 2 0 0 0-2-2H16.5Z"
    />
  </svg>
);

export default UploadIcon;
