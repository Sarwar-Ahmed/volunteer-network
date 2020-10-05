import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ConfirmDeleteForUser = () => {
    return (
        <div>
            <Header />
            <h2>Deleted Successfully!</h2>
            <Link to="/userRegister">Back to registration list</Link>
        </div>
    );
};

export default ConfirmDeleteForUser;