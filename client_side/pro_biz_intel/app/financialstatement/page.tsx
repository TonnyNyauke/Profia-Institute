import React from 'react'
import Income from './income'
import Expenses from './expenses'
import Assets from './assets'
import Liabilities from './liabilities'
import { Progress } from '@/components/ui/progress'
import SeparatorLine from '../SeparatorLine'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

function Page() {
  return (
    <div className='m-1 p-4'>
        <nav className='m-4 flex flex-row justify-between'>
            <Link href="/home"><FaArrowLeft /></Link>
            <Link href='/financialstatement/balancesheet'>Balance sheet</Link>
            <Link href='/financialstatement/incomestatement'>Income statement</Link>
            <Link href='/financialstatement/balancesheet'>Cashflow statement</Link>
        </nav>
        <SeparatorLine />
        <div className='flex flex-row m-2'>
            <div className='border-r border-blue-500 w-1/2'>
                <Income />
                <Expenses />
            </div>
            <div className='mx-4 flex flex-col items-center'>
                <h2 className='font-semibold text-xl mx-2 text-center mb-4'>CASHFLOW FORECAST</h2>
                <Progress value={33}/>
                <div className='m-4'>
                    <p className='m-2 font-semibold'>CASH : Kshs 10,000</p>
                    <p className='m-2 font-semibold'>TOTAL INCOME : Kshs 150,000</p>
                    <p className='m-2 font-semibold'>TOTAL EXPENSE : Kshs -100,000</p>
                    <SeparatorLine />
                    <p className='m-2 font-bold'>PAYDAY : Kshs 50,000</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row mt-4 border border-blue-500 rounded-md'>
            <div className='w-1/2'>
                <Assets />
            </div>
            <div className='w-1/2'>
                <Liabilities />
            </div>
      </div>
    </div>
  )
}

export default Page