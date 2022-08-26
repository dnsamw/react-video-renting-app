import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import getPagination from '../utils/paginate';

class MoviesTable extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    startPageIndex: 0,
    selectedGenre: null,
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
    this.setState({ selectedGenre: genre, startPageIndex: 0 });
  };

  handlePagination = (pageNumber) => {
    const startIndex = pageNumber * this.state.pageSize;
    this.setState({ startPageIndex: startIndex });
  };

  render() {
    const { movies, genres, pageSize, startPageIndex, selectedGenre } =
      this.state;
    const filtered = movies.filter((movie) =>
      selectedGenre ? movie.genre._id === selectedGenre._id : movies
    );

    const pagination = getPagination(startPageIndex, pageSize, filtered);

    return (
      <>
        <div className="row mt-2">
          <div className="col-2">
            <ul className="list-group">
              <li
                onClick={() => this.handleSelectGenre(null)}
                className="list-group-item clickable"
              >
                All Genres
              </li>
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
                {pagination.map((movie) => (
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
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        style={{ backgroundColor: 'red', color: 'white' }}
                        type="button"
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {Array(Math.ceil(filtered.length / 4))
                    .fill('')
                    .map((_, index) => (
                      <li
                        onClick={() => this.handlePagination(index)}
                        key={index}
                        className="page-item"
                      >
                        <span className="page-link clickable">{1 + index}</span>
                      </li>
                    ))}
                </ul>
              </nav>
            </>
          </div>
        </div>
      </>
    );
  }
}

export default MoviesTable;
