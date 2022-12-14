import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './style.css';

import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:_id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
