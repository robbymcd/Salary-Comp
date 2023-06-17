import React from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

import './Main.css';

export default function Main({cityCOL1, cityCOL2, cityName1, cityName2, salary1, salary2}) {
    const calcAdjustedSal = (salary, col) => {
        return salary * (col/100);
    }

    const formatSalary = (salary) => {
        return parseInt(salary.replace(/[$,]/g, "").replace("$", ""));
    }

    const reFormatSalary = (salary) => {
        // Remove digits after two decimal places
        const regex = /\.\d{2}K\d+/;
        const formattedSalary = salary.toString().replace(regex, '');

        // Convert the salary to a number and format it with commas
        const formattedNumber = Number(formattedSalary).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        // Add the '$' symbol
        return '$' + formattedNumber;
    }

    const betterJob = (salary1, salary2) => {
        return salary1 > salary2 ? "1" : "2";
    }

    const adjSalary1 = calcAdjustedSal(formatSalary(salary1), cityCOL1);
    const adjSalary2 = calcAdjustedSal(formatSalary(salary2), cityCOL2);

    const data = {
        labels: ['Salary 1', 'Salary 2', 'Adjusted Salary 1', 'Adjusted Salary 2'],
        datasets: [{
            data: [formatSalary(salary1), formatSalary(salary2), adjSalary1, adjSalary2],
            backgroundColor: [
                '#1D3D38',
                '#52796F',
                '#1D3D38',
                '#52796F'
            ],
            borderColor: [
                '#000',
                '#000',
                '#000',
                '#000'
            ]
        }]
    };

    Chart.register(...registerables);

    console.log(salary1, salary2, adjSalary1, adjSalary2);

    return (
        <div className='main-container'>
            <div className='section1'>
                <p className='section1-text'>
                    Job #{betterJob(adjSalary1, adjSalary2)} pays more than Job #{betterJob(adjSalary2, adjSalary1)} by {reFormatSalary(Math.abs(adjSalary1 - adjSalary2).toFixed(2))}
                </p>
            </div>
            <div className='section2'>
                <div className='job'>
                    <div className='job-header'>
                        <p>Job #1</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>Salary</p>
                        <p className='stat'>{salary1}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>City</p>
                        <p className='stat'>{cityName1}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>COL</p>
                        <p className='stat'>{cityCOL1}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>Adjusted Salary</p>
                        <p className='stat'>{reFormatSalary(adjSalary1)}</p>
                    </div>
                </div>
                <div className='job'>
                    <div className='job-header'>
                        <p>Job #2</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>Salary</p>
                        <p className='stat'>{salary2}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>City</p>
                        <p className='stat'>{cityName2}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>COL</p>
                        <p className='stat'>{cityCOL2}</p>
                    </div>
                    <div className='job-row'>
                        <p className='label'>Adjusted Salary</p>
                        <p className='stat'>{reFormatSalary(adjSalary2)}</p>
                    </div>
                </div>
            </div>
            <div className='section3'>
                <Bar style={{height: '300px '}} data={data} options={{
                    layout: {
                        padding: 10
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: '#fff',
                                generateLabels: (chart) => {
                                    return [
                                        { text: 'Job #1', fillStyle: '#1D3D38'},
                                        { text: 'Job #2', fillStyle: '#52796F'},
                                    ];
                                } 
                            }
                        },
                    },
                    scales: {
                        x: {
                            type: 'category',
                            ticks: {
                                color: '#fff',
                                font: {
                                    size: 15
                                },
                            }
                        },
                        y : {
                            ticks: {
                                color: '#fff',
                                font: {
                                    size: 15
                                },
                            },
                        },
                    },
                }}
            />
            </div>
        </div>
    );
}