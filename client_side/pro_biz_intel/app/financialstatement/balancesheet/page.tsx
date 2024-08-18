import React from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'

function Page() {
  return (
    <div className='flex flex-row justify-between m-4'>
        <div className='border-r border-blue-500 w-1/2'>
            <Assets />
        </div>
        <div className='w-1/2'>
            <Liabilities />
        </div>
    </div>
  )
}

export default Page