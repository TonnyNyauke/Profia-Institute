import React from 'react'

interface FunctionProps {
  handleShowComponent: (component:string) => void;
}

function SidebarLeft({handleShowComponent} : FunctionProps) {

  return (
    <div className='flex flex-col m-2 border-r border-blue-500 h-full'>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>#</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Set Months</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2' onClick={() => handleShowComponent('expenses')}>Expenses</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2' onClick={() => handleShowComponent('income')}>Income</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Marketing $ Leads</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>View budget plan</button>
    </div>
  )
}

export default SidebarLeft