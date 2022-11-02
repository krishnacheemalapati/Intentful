import React, { useState, useEffect, useRef } from 'react'
import { Bubble } from 'react-chartjs-2';
import RandomColor from 'randomcolor';
import axios from 'axios'
import { useSelector } from 'react-redux'

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
    SubTitle
} from 'chart.js';

ChartJS.register(
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    SubTitle
);

export const options = {
    scales: {
        y: {
            display: false,
        },
        x: {
            display: false,
        }
    }
};

export default function BubbleChart(props) {
    const [data, setData] = useState({})


    let dataSoFar = { "datasets": [] }

    const refreshData = () => {
        for (const intent in props.intents) {
            dataSoFar["datasets"].push({
                label: intent,
                data: Array.from({ length: 1 }, () => ({
                    x: Math.random() * 900,
                    y: Math.random() * 500,
                    r: props.intents[intent][0] * 80
                })),
            })
        }
        setData(dataSoFar)
    }

    useEffect(() => {
        refreshData()
    }, [props.intents])

    let size = Object.keys(data).length;
    if (size === 0) {
        return (<p>BUBBLE CHART</p>)
    }
    else {
        return (<div>
            <Bubble options={options} data={data} />

        </div>)
    }
}
