import React from 'react'

function Expenses() {
  return (
    <div className='border border-blue-500 rounded-md mt-2 mx-2 h-56'>
        <h2 className='font-semibold text-xl mx-2'>EXPENSES</h2>
        <div className='m-2'>
            <p>Taxes    :   Kshs X</p>
            <p>Salaries/Wages   : Kshs Y</p>
            <p>Rent/Lease   : Kshs Z</p>
            <p>Transport    : Kshs A</p>
        </div>
    </div>
  )
}

export default Expenses