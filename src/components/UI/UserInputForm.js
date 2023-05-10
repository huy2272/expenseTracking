import './UserInputForm.css';
import ExpenseForm from '../NewExpense/ExpenseForm';
import PaymentForm from '../RBC_API/DownPayment/PaymentForm';
import React, { useState } from 'react'

function InputForm(props) {
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function editingHandler() {
        setIsEditing(!isEditing);
    }

    return <div className='new-input'>
        {!isEditing && <button onClick={editingHandler}>Add new {props.type}</button>}
        {isEditing && props.type === 'expense' &&
            < ExpenseForm
                onCancel={editingHandler}
                onSaveExpenseData={saveExpenseDataHandler}
            />}
        {isEditing && props.type === 'payment' &&
            < PaymentForm
                onCancel={editingHandler}
            />}
    </div>
}
export default InputForm;