import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import LogInComponent from './auth-components/logInPage';
import RegisterComponent from './auth-components/registerPage';
import HomePage from './auth-components/homePage';

if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Route path="/" component={LogInComponent} exact />
          <Route path="/register" component={RegisterComponent} exact />
          <Route path="/homePage" component={HomePage} exact />
        </div>
      </Router>
    </Provider>
  )
}

export default App;
