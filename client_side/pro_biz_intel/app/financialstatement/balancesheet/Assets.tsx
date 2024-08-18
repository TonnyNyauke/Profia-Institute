import React from 'react'

function Assets() {
  return (
    <div className="p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-2xl font-bold mb-2">Assets</h2>
      <div className="bg-white shadow-md rounded px-4 py-6 mb-4">
        <h2 className="text-lg font-bold mb-2">Current Assets</h2>
        <ul className="list-none mb-4">
          <li className="flex justify-between mb-2">
            <span>Cash and Cash Equivalents:</span>
            <span className="text-gray-600">Kshs 1,300,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Accounts Receivable:</span>
            <span className="text-gray-600">Kshs 650,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Inventory:</span>
            <span className="text-gray-600">Kshs 260,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Prepaid Expenses:</span>
            <span className="text-gray-600">Kshs 130,000</span>
          </li>
          <li className="flex justify-between font-bold">
            <span>Total Current Assets:</span>
            <span className="text-gray-600">Kshs 2,340,000</span>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded px-4 py-6 mb-4">
        <h2 className="text-lg font-bold mb-2">Non-Current Assets</h2>
        <ul className="list-none mb-4">
          <li className="flex justify-between mb-2">
            <span>Property, Plant, and Equipment:</span>
            <span className="text-gray-600">Kshs 6,500,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Accumulated Depreciation:</span>
            <span className="text-gray-600">Kshs 1,300,000</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Net Property, Plant, and Equipment:</span>
            <span className="text-gray-600">Kshs 5,200,000</span>
          </li>
          <li className="flex justify-between font-bold">
            <span>Total Non-current Assets:</span>
            <span className="text-gray-600">Kshs 5,200,000</span>
          </li>
        </ul>
      </div>
      <p className="text-lg font-bold mb-4">Total Assets: Kshs 7,540,000</p>
    </div>
  )
}

export default Assets