import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import LinePlot from '../LinePlot'
import chart from '../Photos/yearly_sales_comparison_chart.jpg'
import Image from 'next/image'
import SeparatorLine from '../SeparatorLine'

function Mainbar() {
  return (
    <div className='m-4'>
        <h2 className='font-semibold text-xl'> DAILY REPORTS</h2>
        <div className='flex flex-row'>
            <div className='flex flex-row border border-gray-500 rounded-sm'>Sales <FaArrowDown className='mx-2'/> -3.8 % </div>
            <div className='flex flex-row mx-10'>
                <p className=''>Sort By:</p>
                <select className='mx-2 border border-gray-500 rounded-sm px-2 py-1'>
                    <option>Revenue</option>
                    <option>Gross Profit</option>
                    <option>Net Profit</option>
                    <option>Sales</option>
                </select>
                <select className='mx-2 border border-gray-500 rounded-sm px-2 py-1'>
                    <option>Weeks</option>
                    <option>Months</option>
                    <option>Years</option>
                    <option>Days</option>
                </select>
            </div>
        </div>
        <div className='m-4'>
            <Image src={chart} alt='chart' width={800} height={800} className='w-full'/>
            <h2 className='font-semibold text-xl underline text-center m-4'> Month of July</h2>
            <div>
                <p className='font-semibold'>Revenue : Kshs 50,000</p>
                <p className='font-semibold'>Gross Profit : Kshs 30,000</p>
                <p className='font-semibold'>Net profit : Kshs 10,000</p>
            </div>
            <SeparatorLine />
            <h2 className='font-semibold text-xl'> Total Trailing Cashflow: Year 2024</h2>
            <div>
                <p className='font-semibold'>TTR: 1.5M</p>
                <p className='font-semibold'>TTGP: 0.5M</p>
                <p className='font-semibold'>TTNP: 0.25M</p>
            </div>
        </div>
    </div>
  )
}

export default Mainbar