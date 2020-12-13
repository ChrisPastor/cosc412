import React from 'react';
import { Chart } from 'primereact/chart';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [178, 174, 170, 172, 168, 169, 166],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [148, 135, 130, 132, 131, 128, 127],
            fill: false,
            borderColor: '#565656'
        }
    ]
};

const options = {
    title: {
        display: true,
        text: 'Your Progress',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    },
    responsive: true
};

export const ProgressGraph = (props) => { 
    const {width, height} = props
    return (
        <div style={{width: "100%", height: "100%"}}>
        <Chart type='line' data={data} options={options} />
        </div>
    );
}