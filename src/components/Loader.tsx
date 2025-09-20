import React from 'react';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-6">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-pink-300 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-2 border-4 border- lavender-00 rounded-full animate-pulse border-b-transparent"></div>
      </div>
    </div>
  );
};
