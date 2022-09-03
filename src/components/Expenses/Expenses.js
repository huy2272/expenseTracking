import React, { useState } from 'react';

import './Expenses.css';
import './ExpensesList.css'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart'


function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2022');
    function filterChangeHandler(enteredYear) {
        setFilterYear(enteredYear);
    }

    //Controlling which props.items can be displayed
    //props.items.filter will return true if it is equal to filteredYear, false otherwise
    //NOTE we do not change the arr, we just control which element is visible
    const filteredExpenses = props.items.filter(expense => {
        //Since filteredYear is a String we should turn the date to a String as well
        return expense.date.getFullYear().toString() === filteredYear;
    });


    //Now the filteredExpenses in return will only contain items from the specified year
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );
}
export default Expenses;