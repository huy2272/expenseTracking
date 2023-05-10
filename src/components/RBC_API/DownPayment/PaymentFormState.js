import React, { useState } from 'react';
import axios from 'axios';

function PaymentFormState() {
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
    return { propertyVal, setPropertyVal, startDate, setStartDate, endDate, setEndDate, minDownPayment, maxLTV, submitHandler }
}
export default PaymentFormState;