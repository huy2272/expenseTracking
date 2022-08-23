import './ExpenseItem.css';
function ExpenseItem() {
    //Can only return one root element per return statement.
    return (
        <div className="expense-item">
            <div>22/08/2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$300.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;