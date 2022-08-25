import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MoviesTable extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = [...this.state.movies];
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: filteredMovies });
  };

  handleSelectGenre = (genre) => {
    console.log(genre);
  };

  render() {
    const { movies, genres } = this.state;
    return (
      <>
        <div className="row mt-2">
          <div className="col-3">
            <ul className="list-group">
              {genres.map((genre) => (
                <li
                  onClick={() => this.handleSelectGenre(genre)}
                  key={genre._id}
                  className="list-group-item clickable"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
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
                    <td>
                      <i
                        className={
                          movie.liked
                            ? 'fa fa-heart clickable'
                            : 'fa fa-heart-o clickable'
                        }
                        aria-hidden="true"
                        onClick={() => this.handleLike(movie)}
                      ></i>
                    </td>
                    <button
                      onClick={() => this.handleDelete(movie)}
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
          </div>
        </div>
      </>
    );
  }
}

export default MoviesTable;
