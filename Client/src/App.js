import React, { Component } from 'react';
import './App.css';

// react module
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// react component
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/dashboard" component={ Dashboard } />
            
          </Switch>
        </Router>
    );
  }
}

export default App;
