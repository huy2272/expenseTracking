import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

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
                {filteredExpenses.map((expense) => (
                <ExpenseItem 
                //By adding a key we avoid bugs 
                //and React will not have to go through each element in arr
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}
                />
                ))}
            </Card>
        </div>

    );
}
export default Expenses;