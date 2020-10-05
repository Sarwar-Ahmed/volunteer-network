import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ConfirmRegistration = () => {
    return (
        <div>
            <Header />
            <h2>Registration Complete</h2>
            <Link to="/userRegister">See registration list</Link>
        </div>
    );
};

export default ConfirmRegistration;