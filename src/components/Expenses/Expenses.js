import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2020');
    function filterChangeHandler(enteredYear) {
        setFilterYear(enteredYear);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((expense) => (
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