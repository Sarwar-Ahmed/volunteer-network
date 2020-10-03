import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path="/registrationForm">
              <RegistrationForm />
            </PrivateRoute>
            <PrivateRoute path="/userRegister">
              <UserRegister />
            </PrivateRoute>
            <PrivateRoute path="/adminRegister">
              <AdminRegister />
            </PrivateRoute>
            <PrivateRoute path="/adminEvent">
              <AdminEvent />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
