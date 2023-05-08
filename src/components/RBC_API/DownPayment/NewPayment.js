import PaymentForm from './PaymentForm';
import './NewPayment.css';
import React, { useState } from 'react';

function NewPayment() {
    const [isEditing, setIsEditing] = useState(false);

    function editingHandler() {
        setIsEditing(!isEditing);
    }

    return <div className='new-payment'>
        {!isEditing && <button onClick={editingHandler}>New Down Payment</button>}
        {isEditing && <PaymentForm onCancel={editingHandler} />}
    </div>
}
export default NewPayment;