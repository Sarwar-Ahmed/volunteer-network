import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UserRegister from './components/UserRegister/UserRegister';
import AdminRegister from './components/AdminRegister/AdminRegister';
import AdminEvent from './components/AdminEvent/AdminEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registrationForm">
            <RegistrationForm />
          </Route>
          <Route path="/userRegister">
            <UserRegister />
          </Route>
          <Route path="/adminRegister">
            <AdminRegister />
          </Route>
          <Route path="/adminEvent">
            <AdminEvent />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
