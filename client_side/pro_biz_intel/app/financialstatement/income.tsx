import React from 'react'

function Income() {
  return (
    <div className='border border-blue-400 rounded-md mx-2 h-56 relative'>
        <h2 className='font-semibold text-xl mx-2'>INCOME</h2>
        <div className='m-2'>
            <p>Sales        : Kshs 100,000</p>
            <p>Consultancy  : Kshs 100,000</p>
        </div>
        <button className='border border-blue-500 rounded-sm mx-2 py-1 px-2 absolute bottom-2 right-0'>More...</button>
    </div>
  )
}

export default Income