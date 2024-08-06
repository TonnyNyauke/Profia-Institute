import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

function AnalysisSideBar() {
  return (
    <div className='flex flex-col border-r border-blue-500'>
        <nav className='m-4'>
            <Link href="/home"><FaArrowLeft /></Link>
        </nav>
        <div>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>#</button>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>Profitability Ratios</button>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>Liquidity Ratios</button>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>Efficiency Ratios</button>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>Price Ratios</button>
            <button className='border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white'>Leverage Ratios</button>
        </div>
    </div>
  )
}

export default AnalysisSideBar