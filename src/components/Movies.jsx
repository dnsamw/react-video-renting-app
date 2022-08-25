import React, { Component } from 'react';
import MoviesTable from './MoviesTable';

class Movies extends Component {
  render() {
    return (
      <>
        <h1>Movies Component </h1>
        <MoviesTable />
      </>
    );
  }
}

export default Movies;
