import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ConfirmAddEventFromAdmin = () => {
    return (
        <div>
            <Header />
            <h1>YAY! Event added succesfully</h1>
            <Link to="/adminEvent">Back to Admin Panel</Link>
        </div>
    );
};

export default ConfirmAddEventFromAdmin;