import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
    //A react hook
    //Must be called inside a function, should not be called inside any nested functions
    //useState has a default variable, but it does allow this variable to be updated
    //useState returns an array w/ EXACTLY 2 elements
    //The updated variable will be store in the second array element, while the default variable is stored in the first element
    //Array destructuring: storing both elements in seperate constants


    //Can only return one root element per return statement.
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;