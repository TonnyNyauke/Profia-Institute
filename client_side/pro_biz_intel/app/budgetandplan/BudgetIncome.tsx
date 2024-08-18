import React, { useState } from 'react';

interface IncomeSource {
  source: string;
  amount: string;
}

function BudgetIncome() {
  const [incomeSources, setIncomeSources] = useState<IncomeSource[]>([{ source: '', amount: '' }]);

  const handleAddIncomeSource = () => {
    setIncomeSources([...incomeSources, { source: '', amount: '' }]);
  };

  const handleRemoveIncomeSource = (index: number): void => {
    setIncomeSources(incomeSources.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <h2>September 2024</h2>
        <h2>Current Income: Kshs 50,000</h2>
        {incomeSources.map((incomeSource, index) => (
          <div key={index} className='flex flex-row'>
            <input
              type='text'
              placeholder='Income source...'
              className='border border-blue-500 py-2 rounded-md m-2'
            />
            <input
              type='text'
              placeholder='Projected income...'
              className='border border-blue-500 py-2 rounded-md m-2'
            />
            <button onClick={() => handleRemoveIncomeSource(index)}>Remove</button>
          </div>
        ))}
        <button
          className='border border-gray-400 py-2 px-2 rounded-md m-2 w-56 hover:border-gray-600'
          onClick={handleAddIncomeSource}
        >
          + Add Income Source
        </button>
        <button
          className='border bg-blue-500 py-2 px-2 rounded-md m-2 text-white border-blue-500 hover:bg-blue-700 mt-6'
        >
          Set Income
        </button>
      </form>
    </div>
  );
}

export default BudgetIncome;