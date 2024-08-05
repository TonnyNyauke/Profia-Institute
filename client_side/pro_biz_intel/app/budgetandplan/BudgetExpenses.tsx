import React from 'react'

function Expenses() {
  return (
    <div>
        <form className='flex flex-col'>
            <h2>September 2024</h2>
            <input type='text' placeholder='describe your expense...' className='border border-blue-500 py-2 rounded-md m-2'/>
            <input type='text' placeholder='Expense amount...'  className='border border-blue-500 py-2 rounded-md m-2'/>
            <button className='border bg-blue-500 py-2 px-2 rounded-md m-2 text-white border-blue-500 hover:bg-blue-700'>Add Expense</button>
        </form>
    </div>
  )
}

export default Expenses