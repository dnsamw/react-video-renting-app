import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './style.css';

import NavBar from './components/NavBar';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Movies />
          {/* <Switch>
        <Route path="/" component={Movies} />
        </Switch> */}
        </div>
      </>
    );
  }
}

export default App;
