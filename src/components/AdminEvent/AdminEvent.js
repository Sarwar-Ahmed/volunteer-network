import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AdminEvent = () => {
    const [adminEvent, setAdminEvent] = useState([]);
    const [active, setActive] = useState(true);
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/adminEvents`)
            .then(res => res.json())
            .then(data => {
                setAdminEvent(data);
            })
    }, [])

    const deleteEvent = (id) => {
        history.push(`/confirmDeleteForAdmin`);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully');
            })
    }
    const onSubmit = (data) =>{
        history.push(`/confirmAddEventFromAdmin`);

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <Container fluid>
            <Container>
                <div className="row">
                    <div className="col-md-2 bg-white p-3">
                        <Navbar>
                            <Nav className="flex-column">
                                <Link to="/adminEvent"><img src="https://iili.io/2VACFV.png" style={{ width: 150 }} className="d-inline-block align-top mb-5" alt="" /></Link>
                                <NavLink to="/adminEvent" onClick={() => setActive(!active)} className={active ? "font-weight-bold p-3" : "navLink font-weight-bold p-3"}><span><img src="https://iili.io/2XE919.png" alt="" className="w-25" /></span> Volunteer register list</NavLink>
                                <NavLink to="/adminEvent" onClick={() => setActive(!active)} className={active ? "navLink font-weight-bold p-3" : "font-weight-bold p-3"}><span><img src="https://iili.io/2XEHge.png" alt="" className="w-25" /></span> Add event</NavLink>
                            </Nav>
                        </Navbar>
                    </div>
                    {
                        active
                            ? <div className="col-md-10">
                                <h2 className="bg-white p-3">Volunteer register list</h2>
                                <div style={{ borderRadius: 20 }} className="p-5 bg-white">
                                    <Table responsive size="sm">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email Id</th>
                                                <th>Registrating date</th>
                                                <th>Volunteer list</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                adminEvent.map(event =>
                                                    <tr key={event._id}>
                                                        <td>{event.name}</td>
                                                        <td>{event.email}</td>
                                                        <td>{event.date}</td>
                                                        <td>{event.eventTitle}</td>
                                                        <td><button onClick={() => deleteEvent(event._id)} className="btn"><img src="https://iili.io/2XG7yb.png" alt="" className="w-50 rounded bg-danger" /></button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            : <div className="col-md-10">
                                <h2 className="bg-white p-3">Add event</h2>
                                <div style={{ borderRadius: 20 }} className="p-5 bg-white">
                                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                        <input name="title" className="form-control" defaultValue="" ref={register({ required: true })} placeholder="Event Title" />
                                        {errors.title && <span className="error">Event Title is required</span>}
                                        <br />

                                        <input name="color" className="form-control" defaultValue="" ref={register({ required: true })} placeholder="Background color" />
                                        {errors.color && <span className="error">Event Background color is required</span>}
                                        <br /> 

                                        <input type="date" name="date" className="form-control" ref={register({ required: true })} placeholder="Date" />
                                        {errors.date && <span className="error">Date is required</span>}
                                        <br />

                                        <input name="description" className="form-control" style={{height: 200}} ref={register({ required: true })} placeholder="Description" />
                                        {errors.description && <span className="error">Description is required</span>}
                                        <br />

                                        <input name="image" className="form-control" defaultValue="" ref={register({ required: true })} placeholder="Image Url" />
                                        {errors.eventTitle && <span className="error">eventTitle is required</span>}
                                        <br />

                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                    }
                </div>
            </Container>
        </Container>
    );
};

export default AdminEvent;