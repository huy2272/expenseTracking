import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react'

function NewExpense(props) {
    const [isEditing, setIsediting] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsediting(false);
    }

    function startEditingHandler() {
        setIsediting(true);
    }

    function stopEditingHandler(){
        setIsediting(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && 
        <ExpenseForm 
        onCancel={stopEditingHandler} 
        onSaveExpenseData={saveExpenseDataHandler} 
        />}
    </div>
}
export default NewExpense;