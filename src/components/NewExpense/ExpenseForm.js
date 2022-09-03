import React, { useState } from 'react'
import './ExpenseForm.css';
function ExpenseForm(props) {
    // Using many states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //or using just one
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    //but have to update all the values each time
    // function titleChangeHandler(event) {
    //     //event.target.value always return a String, that is why useState was initialized with an empty String.
    //     //DO NOT copy states like this
    //     setUserInput({
    //         //This takes an object and pull out all the key/values pairs
    //         ...userInput,
    //         //then override enteredTitle
    //         enteredTitle: event.target.value,
    //     });
    // }


    //Copy states like this, the previous method SCHEDULES the state updates
    //You could be depending on a state that is outdated
    //But if you use the method below it is guaranteed that React will give you
    //the previous state
    // function amountChangeHandler(event) {
    //     setUserInput((prevState) => {
    //         return {...prevState,enteredAmount: event.target.value,};
    //     })
    // }

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        //Stop the default of the request
        //Default: reload the webpage
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        //After logging the user's data, set the fields to empty
        //This clears the input form
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type="text" 
                //Pass the state back to the form alongside with listening to user's inputs
                value={enteredTitle} 
                onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type="number" 
                value={enteredAmount}
                onChange={amountChangeHandler} 
                min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                type="date" 
                value={enteredDate}
                onChange={dateChangeHandler} 
                min="2019-01-01" max="2022-12-31" />
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;
