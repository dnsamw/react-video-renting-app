import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MoviesTable extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default MoviesTable;
