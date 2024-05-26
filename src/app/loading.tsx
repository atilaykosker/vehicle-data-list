import React from 'react';

const loading = () => {
  return (
    <div id="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="flex flex-col items-center">
        <div className="animate-spin w-10 h-10 border-t-2 border-b-2 border-slate-500 rounded-full"></div>
        <span className="mt-4 text-sm text-slate-500">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
