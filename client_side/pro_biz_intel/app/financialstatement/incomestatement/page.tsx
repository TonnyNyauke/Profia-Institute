import React from 'react';
import income from './income.json';

interface IncomeData {
  revenue: string;
  opening_stock: string;
  purchases: string;
  closing_stock: string;
}

function Page() {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded shadow-md">
      {(income as IncomeData[]).map((newIncome, index) => (
        <div key={index} className="mb-4 p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold mb-2">Entry {index + 1}</h2>
          <div className="flex flex-wrap mb-4">
            <p className="w-full md:w-1/2 xl:w-1/3 mb-2 md:mb-4 xl:mb-6">
              <span className="font-bold">Revenue:</span> {newIncome.revenue}
            </p>
            <p className="w-full md:w-1/2 xl:w-1/3 mb-2 md:mb-4 xl:mb-6">
              <span className="font-bold">Opening stock:</span> {newIncome.opening_stock}
            </p>
            <p className="w-full md:w-1/2 xl:w-1/3 mb-2 md:mb-4 xl:mb-6">
              <span className="font-bold">Purchases:</span> {newIncome.purchases}
            </p>
            <p className="w-full md:w-1/2 xl:w-1/3 mb-2 md:mb-4 xl:mb-6">
              <span className="font-bold">Closing stock:</span> {newIncome.closing_stock}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;