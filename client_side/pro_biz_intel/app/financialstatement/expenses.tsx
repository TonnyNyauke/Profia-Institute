import React from 'react'

function Expenses() {
  return (
    <div className='border border-blue-500 rounded-md mt-2 mx-2 h-56 relative'>
        <h2 className='font-semibold text-xl mx-2'>EXPENSES</h2>
        <div className='m-2'>
            <p>Taxes    :   Kshs X</p>
            <p>Salaries/Wages   : Kshs Y</p>
            <p>Rent/Lease   : Kshs Z</p>
            <p>Transport    : Kshs A</p>
        </div>
        <button className='border border-blue-500 rounded-sm mx-2 py-1 px-2 absolute bottom-2 right-0'>More...</button>
    </div>
  )
}

export default Expenses