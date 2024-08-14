
import ButtonComponent from '../../customcomponents/ButtonComponent'
import React from 'react'

function ExpenseType() {
  function handleClickButton(): () => void {
    throw new Error('Function not implemented.')
  }

  return (
    <div>
       <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>Rent</ButtonComponent>
      <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>Salaries/Wages</ButtonComponent>
      <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>Rent/Lease</ButtonComponent>
      <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>Utilities</ButtonComponent>
      <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>Transport</ButtonComponent>
      <ButtonComponent className={`border border-blue-500 m-2 px-2 py-2 rounded-sm text-center w-full hover:bg-blue-600 hover:text-white`}
       onClick={handleClickButton}>
        Add Expense
      </ButtonComponent>
    </div>
  )
}

export default ExpenseType