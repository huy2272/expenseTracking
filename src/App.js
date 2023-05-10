import Expenses from './components/Expenses/Expenses';
import React, { useState } from 'react';
import Input from './components/UI/UserInputForm'
const initExpenses = [
  {
    id: 'e1',
    title: 'Logitech G305',
    amount: 69.19,
    date: new Date(2022, 9, 2)
  },
  {
    id: 'e2',
    title: 'Nike Blazers Low',
    amount: 135,
    date: new Date(2022, 9, 2)
  },
  {
    id: 'e3',
    title: 'Gym Membership',
    amount: 29.86,
    date: new Date(2022, 8, 25),
  },
  {
    id: 'e4',
    title: 'New Monitor',
    amount: 526.58,
    date: new Date(2021, 10, 13),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initExpenses);

  function addExpenseHandler(expense) {
    setExpenses(prevExpenses => {
      //Return a new array containing a new expense
      //then copy all the elements of the prevArr over
      return [expense, ...expenses];
    });
  }
  return (
    <div>
      <Input onAddExpense={addExpenseHandler} type='payment' />
      <Input onAddExpense={addExpenseHandler} type='expense' />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
