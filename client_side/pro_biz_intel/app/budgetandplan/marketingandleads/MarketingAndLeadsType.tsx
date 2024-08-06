import React from 'react'

function MarketingAndLeadsType() {
  return (
    <div>
        <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Facebook</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Email Marketing</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Tiktok</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Instagram</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>TV Commerical</button>
       <div className='flex flex-col'>
        <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center bg-gray-600 hover:text-white'> Add Channel</button>
        <button className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90
        px-4 py-2 rounded-sm m-2">Remove Channel</button>
       </div>
    </div>
  )
}

export default MarketingAndLeadsType