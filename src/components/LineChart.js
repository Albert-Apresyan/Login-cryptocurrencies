import React, { useState } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, TimeScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    TimeScale,
)

function LineChart(coinHistory) {
console.log(coinHistory);
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.data?.history?.length; i += 1) {
        coinTimestamp.push(coinHistory?.data?.data?.history[i].timestamp);
    }

    console.log(coinPrice);
    console.log(coinTimestamp);
    const data1 = {
        labels: coinTimestamp,
        datasets: [{
            label:'Chart of ',
            data: coinPrice,
            borderColor:['black'],
            color:['red'],
            borderWidth: 2,
            pointRadius: 1,

        }]
    }

    const options = {
    maintainAspectRatio: true,
    scales: {
        x:{
            type: "time"
        }
    }
}

    return(
    <>         
       <Line
            height = {400}
            width = {1000}
            data = {data1}
            options = {options}
       />
    </>
    )
}



export default LineChart
