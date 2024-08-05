import React from 'react'

function SidebarLeft() {
  return (
    <div className='w-1/3 flex flex-col m-2 border-r border-blue-500 h-full'>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>#</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Set Months</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Expenses</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Income</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Marketing $ Leads</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>View budget plan</button>
    </div>
  )
}

export default SidebarLeft