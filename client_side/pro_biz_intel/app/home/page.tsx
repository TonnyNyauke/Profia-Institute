import React from 'react'
import Sidebar from './sidebar'
import Link from 'next/link'
import SeparatorLine from '../SeparatorLine'
import Mainbar from './mainbar'

function Page() {
  return (
    <div className='m-4'>
      <nav className='flex flex-row'>
        <div className="border-r border-blue-600 w-1/3 mx-2">
          <Link href="#" className="text-blue-600 hover:text-blue-900">Home</Link>
        </div>
        <div className='w-2/3 flex justify-between mx-2'>
          <Link href="#" className="text-blue-600 hover:text-blue-900">Sales Entry</Link>
          <Link href="#" className="text-blue-600 hover:text-blue-900">My Shop</Link>
          <Link href="#" className="text-blue-600 hover:text-blue-900">Sales</Link>
          <button>Company Profile</button>
        </div>
      </nav>
      <SeparatorLine />
      <div className='flex flex-row'>
        <Sidebar />
        <Mainbar />
        </div>
    </div>
  )
}

export default Page