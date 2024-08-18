import React, { useState } from 'react';

interface IncomeSource {
  expense: string;
  amount: string;
}

function BudgetIncome() {
  const [expenseSources, setExpenseSources] = useState<IncomeSource[]>([{ expense: '', amount: '' }]);

  const handleAddExpenseSource = () => {
    setExpenseSources([...expenseSources, { expense: '', amount: '' }]);
  };

  const handleRemoveExpenseSource = (index: number): void => {
    setExpenseSources(expenseSources.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <h2>September 2024</h2>
        <h2>Current Income: Kshs 50,000</h2>
        {expenseSources.map((expenseSource, index) => (
          <div key={index} className='flex flex-row'>
            <input
              type='text'
              placeholder='Expense...'
              className='border border-blue-500 py-2 rounded-md m-2'
            />
            <input
              type='text'
              placeholder='Expense Amount...'
              className='border border-blue-500 py-2 rounded-md m-2'
            />
            <button onClick={() => handleRemoveExpenseSource(index)}>Remove</button>
          </div>
        ))}
        <button
          className='border border-gray-400 py-2 px-2 rounded-md m-2 w-56 hover:border-gray-600'
          onClick={handleAddExpenseSource}
        >
          + New Expense
        </button>
        <button
          className='border bg-blue-500 py-2 px-2 rounded-md m-2 text-white border-blue-500 hover:bg-blue-700 mt-6'
        >
          Set Expenses
        </button>
      </form>
    </div>
  );
}

export default BudgetIncome;