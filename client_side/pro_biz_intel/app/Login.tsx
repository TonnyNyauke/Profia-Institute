import React from 'react'

function Login(){
    return (
      <div>
        <div className='flex justify-center items-center mx-4'>
          <form className='flex flex-col w-96 mx-auto'>
            <input type='text' placeholder='Businness name...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
            <input type='text' placeholder='Businness address...' className='w-full p-2 mb-4 border border-gray-300 rounded'/>
            <div className='flex flex-row'>
              <button className='w-full p-2 mb-4 border border-blue-500 rounded mx-1'>Sign in</button>
              <button className='w-full p-2 mb-4 border border-blue-500 rounded mx-1'>Sign up</button>
            </div>
            <button className='w-full p-2 mb-4 border border-gray-300 rounded'>Cancel</button>
          </form>
         </div>
      </div>
    )
  }

export default Login