"use client"

import { useState } from 'react';

const Tooltip = ({ children, content, position = 'top', width = 'w-64' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block cursor-pointer relative group"
      >
        {children}
        <span className="absolute right-0 top-0 w-4 h-4 bg-emerald-900 rounded-full flex items-center justify-center text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
          i
        </span>
      </div>
      
      {isVisible && (
        <div 
          className={`absolute z-50 ${positionClasses[position]} ${width} bg-gray-900 text-gray-300 p-4 rounded-md shadow-lg border border-gray-800 glow-border`}
        >
          <div className="text-sm">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;