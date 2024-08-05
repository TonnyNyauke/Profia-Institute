import React from 'react'

function Liabilities() {
  return (
    <div className='relative h-56'>
      <h2 className='font-semibold text-xl mx-2'>LIABILITIES</h2>
      <div className='m-2'>
        <p>Loans & Debts  : Kshs X</p>
        <p>Accounts Payable : Kshs Y</p>
      </div>
      <button className='border border-blue-500 rounded-sm mx-2 py-1 px-2 absolute bottom-2 right-0'>More...</button>
    </div>
  )
}

export default Liabilities