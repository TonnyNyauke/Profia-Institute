import React from 'react'
import income from './income.json'

interface IncomeData {
    revenue: string
    opening_stock: string
    purchase: string
    closing_stock: string
    
} 

function Page() {
  return (
    <div>
        {(income as IncomeData[]).map((newIncome) => (
            <div key={newIncome.revenue}>
                <p>{newIncome.revenue}</p>
                <p>{newIncome.opening_stock}</p>
                <p>{newIncome.purchase}</p>
                <p>{newIncome.closing_stock}</p>
            </div>
        ))}
    </div>
  )
}

export default Page