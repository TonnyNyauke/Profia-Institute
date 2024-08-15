'use client'

import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import ButtonComponent from '../customcomponents/ButtonComponent'

function AnalysisSideBar() {
  function handleClickButton(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='flex flex-col border-r border-blue-500'>
        <nav className='m-4'>
            <Link href="/home"><FaArrowLeft /></Link>
        </nav>
        <div>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>#</ButtonComponent>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>Profitability Ratios</ButtonComponent>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>Liquidity Ratios</ButtonComponent>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>Efficiency Ratios</ButtonComponent>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>Price Ratios</ButtonComponent>
          <ButtonComponent className={`border border-blue-500 m-2 px-x py-2 rounded-sm text-center w-9/12 hover:bg-blue-600 hover:text-white`}
          onClick={handleClickButton}>Leverage Ratios</ButtonComponent>
        </div>
    </div>
  )
}

export default AnalysisSideBar