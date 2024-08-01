import React from 'react'

function page() {
  return (
    <div>
        <div className='flex justify-center items-center '>
        <form className='flex flex-col w-full max-w-md mx-auto'>
          <input type='text' placeholder='Businness name...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
          <input type='text' placeholder='Businness address...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
          <input type='text' placeholder='Contact...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
          <input type='text' placeholder='Industry...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
          <select className='appearance-none bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500
           focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
            <option>Business size</option>
            <option>Small Business {'< Ksh 5,000,000'}</option>
            <option>Medium Size Business {'< Ksh 800,000,000'}</option>
          </select>
        </form>
       </div>
    </div>
  )
}

export default page