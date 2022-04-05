
import React from 'react';
import {  Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-flex justify-content-around align-items-center my-5'>
            <div>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey ={'revenue'}></Line>
                <Line dataKey ={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'sell'}></YAxis>
               <Tooltip></Tooltip>
            </LineChart>
            <p className='text-secondary py-4 text-center'>Fig: Line Chart</p>
            </div>
            <div>
            <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis />
            <Tooltip></Tooltip>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="investment" fill="#8884d8" barSize={30} />
        </BarChart>
        <p className='text-secondary py-4 text-center'>Fig: Bar Chart</p>
            </div>
            <div>
            <PieChart width={300} height={250}>
                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
            <p className='text-secondary py-4 text-center'>Fig: Pie Chart</p>
            </div>
           


          
           
        </div>
    );
};

export default Dashboard;