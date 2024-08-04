import React from 'react'
import Income from './income'
import Expenses from './expenses'
import Assets from './assets'
import Liabilities from './liabilities'

function Page() {
  return (
    <div className='m-4 p-4'>
        <div className='border-r border-blue-500 w-1/2'>
            <Income />
            <Expenses />
        </div>
        <div className='flex flex-row justify-center'>
            <Assets />
            <Liabilities />
        </div>
    </div>
  )
}

export default Page