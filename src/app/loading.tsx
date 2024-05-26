import React from 'react';

const loading = () => {
  return (
    <div
      id='loading'
      className='fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90'
    >
      <div className='flex flex-col items-center'>
        <div className='h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-slate-500'></div>
        <span className='mt-4 text-sm text-slate-500'>Loading...</span>
      </div>
    </div>
  );
};

export default loading;
