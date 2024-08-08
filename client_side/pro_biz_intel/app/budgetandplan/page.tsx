'use client'

import React, { useState } from 'react'
import SidebarLeft from './SidebarLeft'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import BudgetExpenses from './BudgetExpenses'
import BudgetIncome from './BudgetIncome'
import MarketingLeads from './MarketingLeads'
import SetMonths from './SetMonths'
import ExpenseType from './expenses/ExpenseType'
import IncomeTypes from './income/IncomeTypes'
import MarketingAndLeadsType from './marketingandleads/MarketingAndLeadsType'



function Page() {
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
            {activeComponent === 'income' && <BudgetIncome />}
            {activeComponent === 'expenses' && <BudgetExpenses />}
            {activeComponent === 'marketing-leads' && <MarketingLeads />}
            
          </div>
          <div className='1/3'>
            {activeComponent === 'set-months' && <SetMonths />}
            {activeComponent === 'expenses' && <ExpenseType />}
            {activeComponent === 'income' && <IncomeTypes />}
            {activeComponent === 'marketing-leads' && <MarketingAndLeadsType />}
          </div>
        </div>
    </div>
  )
}

export default Page