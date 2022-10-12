import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';



const Homepage = () => {
    const mainData = useLoaderData();
    const data = mainData.data;
    
    return (
        <div>
            <h2>This is Homepage -  {data.length} </h2>
            {
                data.map(category => <Dashboard 
                    key={category.id} 
                    category = {category}
                    ></Dashboard>)

            }
        </div>
    );
};

export default Homepage;