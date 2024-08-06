import React from 'react'

function IncomeTypes() {
  return (
    <div>
        <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Sales</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Consultancy</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center hover:bg-blue-600 hover:text-white'> Add Income Source</button>
    </div>
  )
}

export default IncomeTypes