import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const UserRegister = () => {
    const [userRegistration, setUserRegistration] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/userEvents`)
        .then(res => res.json())
        .then(data => {
            setUserRegistration(data);
        })
    }, [])
    return (
        <Container fluid className="userRegister">
            <Container>
                <Header />
                <div className="row">
                    {
                        userRegistration.map(reg => 
                            <div className="col-md-6 d-flex p-5 rounded">
                                <div className="bg-white p-3">
                                    <img style={{width: 200}} src="https://iili.io/2W1Hkx.png" alt=""/>
                                </div>
                                <div className="bg-white p-3">
                                    <h5>{reg.eventTitle}</h5>
                                    <p>{(new Date(reg.date).toDateString('dd/MM/yyyy'))}</p>
                                    <button className="btn btn-secondary">Cancel</button>
                                </div>
                            </div>    
                        )
                    }
                </div>
            </Container>
        </Container>
    );
};

export default UserRegister;