import React from 'react'

function BudgetIncome() {
  return (
    <div>
      <form className='flex flex-col'>
            <h2>September 2024</h2>
            <h2>Current Income: Kshs 50,000</h2>
            <input type='text' placeholder='Projected income...' className='border border-blue-500 py-2 rounded-md m-2'/>
            <button className='border bg-blue-500 py-2 px-2 rounded-md m-2 text-white border-blue-500 hover:bg-blue-700'>Set Income</button>
        </form>
    </div>
  )
}

export default BudgetIncome