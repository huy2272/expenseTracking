import React from 'react';
import './PaymentForm.css';
import PaymentFormState from './PaymentFormState';

function PaymentForm(props) {
    const {
        propertyVal,
        setPropertyVal,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        minDownPayment,
        maxLTV,
        submitHandler
    } = PaymentFormState();

    function propertyValue(event) {
        setPropertyVal(event.target.value);
    }

    function appStartDate(event) {
        setStartDate(event.target.value);
    }

    function appEndDate(event) {
        setEndDate(event.target.value);
    }
    return <form onSubmit={submitHandler}>
        <div className='new-payment__controls'>
            <div className='new-payment__control'>
                <label>Property Value</label>
                <input
                    type='number'
                    value={propertyVal}
                    onChange={propertyValue} />
            </div>
            <div className='new-payment__control'>
                <label>Start Date</label>
                <input
                    type='date'
                    value={startDate}
                    onChange={appStartDate} />
            </div>
            <div className='new-payment__control'>
                <label>End Date</label>
                <input
                    type='date'
                    value={endDate}
                    onChange={appEndDate}
                    min={startDate} />
            </div>
            <div>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </form>
}

export default PaymentForm;

