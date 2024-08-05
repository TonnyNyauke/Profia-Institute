'use client'

import React, { useState } from 'react'
import SidebarLeft from './SidebarLeft'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import BudgetExpenses from './BudgetExpenses'
import BudgetIncome from './BudgetIncome'



function page() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleShowComponent = (component: string) => {
    setActiveComponent(component);
  }
  return (
    <div >
        <nav className='m-4'>
            <Link href="/home"><FaArrowLeft /></Link>
        </nav>
        <div className='flex flex-row'>
          <div className='w-1/3'>
            <SidebarLeft handleShowComponent = {handleShowComponent}/>
          </div>
          <div className='w-1/3 border-r border-blue-500'>
            {activeComponent === 'expenses' && <BudgetExpenses />}
            {activeComponent === 'income' && <BudgetIncome />}
          </div>
          <div className='1/3'>Hello</div>
        </div>
    </div>
  )
}

export default page