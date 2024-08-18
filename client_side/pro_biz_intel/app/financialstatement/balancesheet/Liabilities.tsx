import React from 'react'

function Liabilities() {
  return (
    <div className="p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-2xl font-bold mb-2">Liabilities</h2>
      <div className="bg-white shadow-md rounded px-4 py-6 mb-4">
        <h2 className="text-lg font-bold mb-2">Current Liabilities</h2>
        <ul className="list-none mb-4">
          <li className="flex justify-between mb-2">
            <span>Accounts Payable:</span>
            <span className="text-gray-600">Kshs 1,950,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Short-term Loans:</span>
            <span className="text-gray-600">Kshs 650,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Accrued Expenses:</span>
            <span className="text-gray-600">Kshs 260,000</span>
          </li>
          <li className="flex justify-between font-bold">
            <span>Total Current Liabilities:</span>
            <span className="text-gray-600">Kshs 2,860,000</span>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded px-4 py-6 mb-4">
        <h2 className="text-lg font-bold mb-2">Non-current Liabilities</h2>
        <ul className="list-none mb-4">
          <li className="flex justify-between mb-2">
            <span>Long-term Loans:  </span>
            <span className="text-gray-600">Kshs 2,600,000</span>
          </li>
          <li className="flex justify-between font-bold">
            <span>Total Non-current Liabilities:    </span>
            <span className="text-gray-600">Kshs 2,600,000</span>
          </li>
        </ul>
      </div>
      <p className="text-lg font-bold mb-4">Total Liabilities: Kshs 5,460,000</p>
    </div>
  )
}

export default Liabilities