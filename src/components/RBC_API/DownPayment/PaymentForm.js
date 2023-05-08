import React, { useState } from 'react';
import './PaymentForm.css';
import axios from 'axios';

function NewPayment(props) {
    const [minDownPayment, setMinDownPayment] = useState(0);
    const [maxLTV, setMaxLTV] = useState(0);
    const date = new Date();
    const [propertyVal, setPropertyVal] = useState(0);
    const [startDate, setStartDate] = useState(date.toLocaleDateString('en-CA'));
    const [endDate, setEndDate] = useState('');

    async function submitHandler(event) {
        event.preventDefault();

        const queryData = {
            propertyValue: propertyVal,
            appStartDate: startDate,
            appEndDate: endDate
        }
        console.log(queryData);
        await axios.post(`https://apisb.rbc.com/VLH0/MinimumDownPaymentAPI/v1/calculator`,
            { queryData },
            {
                auth: {
                    username: 'bGx20qBjsc4AVtt2G1VYjpxhCHEJpYhR',
                    password: 'D1H7c0kO83GydVoe'
                }
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    let { status, calculatedMinDownPayment, calculatedMaxLTV } = res.data;
                    setMinDownPayment(calculatedMinDownPayment);
                    setMaxLTV(calculatedMaxLTV);
                }
                else {
                    console.log(res.status);
                    console.log("Error");
                }
            })
    }

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

export default NewPayment;

