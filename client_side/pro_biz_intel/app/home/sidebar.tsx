import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col border-r border-blue-600 w-1/3 mt-2'>
        <Link href='/financialstatement' className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2 text-center'>Finacial Statement</Link>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Analysis Report</button>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2'>Historical Report</button>
        <Link href='/budgetandplan' className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2 text-center'>Budgeting & Planning</Link>
        <button className='w-9/12 border border-blue-500 rounded-md mb-4 px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white'>Book Consultation</button>
    </div>
  )
}

export default Sidebar