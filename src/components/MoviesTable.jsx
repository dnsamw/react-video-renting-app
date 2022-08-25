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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><i class="fa fa-heart" aria-hidden="true"></i></td>
                <button
                  style={{ backgroundColor: 'red', color: 'white' }}
                  type="button"
                  className="btn btn-sm m-1"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default MoviesTable;
