import React, { useState } from 'react'

function NewPayment(props) {
    const [downPayment, setDownPayment] = useState(100);
    function submitHandler(event) {
        event.preventDefault();
    }

    return <form onSubmit={submitHandler}>
        <div className='new-payment__controls'>
            <label>Test Payment</label>
            <input
                type='number'
                value={downPayment} />
            <div>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </div>
    </form>
}

export default NewPayment;

