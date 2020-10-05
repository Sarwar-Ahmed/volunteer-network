import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ConfirmDeleteForAdmin = () => {
    return (
        <div>
            <Header />
            <h2>Deleted Successfully!</h2>
            <Link to="/adminEvent">Back to Admin Panel</Link>
        </div>
    );
};

export default ConfirmDeleteForAdmin;