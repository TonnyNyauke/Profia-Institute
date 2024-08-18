import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function MarketingLeads() {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  return (
    <div>
        <form className='relative' onSubmit={handleSubmit}>
            <h2>September 2024</h2>
            <input type='text' placeholder='Amount...' className='border border-blue-500 py-2 rounded-md m-2 w-11/12'/>
            <div className='flex flex-row w-11/12'>
                <input type='text' placeholder='Lead generation...' className='border border-blue-500 py-2 rounded-md m-2 w-1/2'/>
                <input type='text' placeholder='Conversion rate...'  className='border border-blue-500 py-2 rounded-md m-2 w-1/2'/>
            </div>
            <Textarea />
            <button className='border bg-blue-500 py-2 px-2 rounded-md m-2 text-white border-blue-500 hover:bg-blue-700 w-11/12'>Add Campaign</button>
        </form>
    </div>
  )
}

export default MarketingLeads