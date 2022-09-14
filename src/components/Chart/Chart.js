import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


function Chart(props) {

    const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);
    //Max only take a list therefore we are using '...' operators to pull out all the arr elements and add them as standalone arguments
    const totMax = Math.max(...dataPointsValues);

    return(
    <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totMax}
                label={dataPoint.label}
            />
        ))}
    </div>
    );
};

export default Chart;