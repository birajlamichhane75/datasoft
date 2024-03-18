import * as React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, elements } from 'chart.js';

Chart.register(CategoryScale);
Chart.defaults.color = "white"

const ChartBox = () => {
    return (
        <>
            <div className="chartwrapper">
                <div className="box bg-cyan-500 text-white ">
                    <Line data={{

                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", 'july'],

                        datasets: [{
                            label: "Sales",
                            data: [45, 50, 60, 95, 54, 23, 56],
                            backgroundColor: "pink",
                            borderColor: "white",
                            tension: .2
                        }],

                    }
                    }
                        options={{
                            maintainAspectRatio: false,
                            elements: {
                                line: {
                                    borderWidth: 8
                                },
                                point: {
                                    radius: 7
                                }
                            }
                        }} />
                </div>
                <div className="btm-text flex flex-col gap-2  ">
                    <div className='border-b-2 border-slate-200 py-4'>
                        <p className='text-3xl text-slate-700'>Daily Sales</p>
                        <p className='text-xl text-slate-400'>55% increase in today sales</p>
                    </div>
                    <div>
                        <p className='text-lg text-slate-400'>
                            updated 1hr ago
                        </p>
                    </div>
                </div>
            </div>
            <div className="chartwrapper">
                <div className="box bg-slate-800">
                    <Bar data={{

                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", 'july', "Aug", "Sept", "Oct"],
                        datasets: [{
                            label: "Sales",
                            data: [45, 25, 60, 35, 54, 23, 56, 45, 34, 23],
                            backgroundColor: "white",

                        }],
                    }
                    }
                        options={{
                            maintainAspectRatio: false,
                            elements: {
                                bar: {
                                    borderRadius: 3,

                                }
                            }
                        }}
                    />
                </div>
                <div className="btm-text flex flex-col gap-2  ">
                    <div className='border-b-2 border-slate-200 py-4'>
                        <p className='text-3xl text-slate-700'>Email Subscription</p>
                        <p className='text-xl text-slate-400'>Last Campaing Performance</p>
                    </div>
                    <div>
                        <p className='text-lg text-slate-400'>
                            Sent 2 days ago
                        </p>
                    </div>
                </div>
            </div>
            <div className="chartwrapper">
                <div className="box bg-red-400">
                    <Line data={{

                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
                        datasets: [{
                            label: "Sales",
                            data: [600, 850, 800, 760, 650, 640, 600, 555, 560, 540, 550, 560],
                            backgroundColor: "pink",
                            borderColor: "white",
                            tension: .4

                        }],
                    }
                    }
                        options={{
                            maintainAspectRatio: false,
                            elements: {
                                line: {
                                    borderWidth: 8
                                },
                                point: {
                                    radius: 7
                                }
                            }
                        }}
                    />
                </div>

                <div className="btm-text flex flex-col gap-2  ">
                    <div className='border-b-2 border-slate-200 py-4'>
                        <p className='text-3xl text-slate-700'>Completed task</p>
                        <p className='text-xl text-slate-400'>Last Campaing Performance</p>
                    </div>
                    <div>
                        <p className='text-lg text-slate-400'>
                            Sent 2 days ago
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartBox;