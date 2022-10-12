import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const mainData = useLoaderData();
    const data = mainData.data;

    return (
        <div>
            <BarChart width={500}
                height={500}
                data={data}
                margin={{
                    top: 100,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey='total' />
                <Tooltip />
                <Legend />
                <Bar dataKey='total' fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;