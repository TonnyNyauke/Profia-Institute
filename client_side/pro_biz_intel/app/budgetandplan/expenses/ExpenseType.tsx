import React from 'react'
import { FaPlus } from 'react-icons/fa'

function ExpenseType() {
  return (
    <div>
        <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Rent</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Salaries/Wages</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Rent/Lease</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Utilities</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white'>Transport</button>
       <button className='border border-blue-500 m-2 px-2 py-2 rounded-sm text-center hover:bg-blue-600 hover:text-white'> Add Expense</button>
    </div>
  )
}

export default ExpenseType