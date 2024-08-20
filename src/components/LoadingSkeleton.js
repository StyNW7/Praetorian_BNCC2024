// src/components/LoadingSkeleton.js
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div className="w-full h-32 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
