import React from 'react'

function Assets() {
  return (
    <div className='border-r border-black relative  h-56'>
        <h2 className='font-semibold text-xl mx-2'>ASSETS</h2>
        <div className='m-2'>
            <p>Inventory    :   Kshs X</p>
            <p>Cash    :   Kshs X</p>
        </div>
        <button className='border border-blue-500 rounded-sm mx-2 py-1 px-2 absolute bottom-2 right-0'>More...</button>
    </div>
  )
}

export default Assets