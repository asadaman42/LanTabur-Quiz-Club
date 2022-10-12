import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({category}) => {
    const {id, name, logo, total} = category;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`quiz/${id}`)
    }

    return (
        <div>            
            <h2>{name}</h2>
            <img src={logo} alt="" />
            <button onClick={handleNavigate}> Start Quiz </button>
        </div>
    );
};

export default Dashboard;