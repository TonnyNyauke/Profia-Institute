import React from 'react'

function Page() {
  return (
    <div className='flex flex-row justify-between m-4'>
        <div className='border-r border-blue-500 w-1/2'>
            <h2>Assets</h2>
        </div>
        <div>
            <h2>Liabilities</h2>
        </div>
    </div>
  )
}

export default Page