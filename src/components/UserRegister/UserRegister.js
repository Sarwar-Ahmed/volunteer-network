import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const UserRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userRegistration, setUserRegistration] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://volunteer-network-by-sarwar.herokuapp.com/userEvents?email=`+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUserRegistration(data);
        })
    }, [])

    const deleteEvent = (id) => {
        history.push(`/confirmDeleteForUser`);
        fetch(`https://volunteer-network-by-sarwar.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert('deleted successfully');
        })
    }

    return (
        <Container fluid className="userRegister">
            <Container>
                <Header />
                <div className="row">
                    {
                        userRegistration.map(regUser => 
                            <div className="col-md-6 d-flex p-5 rounded" key={regUser._id}>
                                <div className="bg-white p-3">
                                    <img style={{width: 200}} src="https://iili.io/2W1Hkx.png" alt=""/>
                                </div>
                                <div className="bg-white p-3">
                                    <h5>{regUser.eventTitle}</h5>
                                    <p>{(new Date(regUser.date).toDateString('dd/MM/yyyy'))}</p>
                                    <button onClick={() => deleteEvent(regUser._id)} className="btn btn-secondary">Cancel</button>
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