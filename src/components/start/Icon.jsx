import React from 'react';

function Icon({ children, icon }) {
  return (
    <div className='flex gap-4 items-center '>
      <div className='bg-blue-800 p-2 rounded-2xl text-blue-100 text-3xl'>
        {icon}
      </div>
      <div className=' font-medium text-blue-900'>{children}</div>
    </div>
  );
}

export default Icon;
