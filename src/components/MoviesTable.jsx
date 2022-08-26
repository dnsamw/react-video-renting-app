import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Table from './common/Table';
import Paginate from './common/Paginate';
import ListGroup from './common/ListGroup';

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
        <div className="row mt-3">
          <div className="col-3">
            <ListGroup
              listItems={genres}
              slectedItem={selectedGenre}
              onSelectListItem={this.handleSelectGenre}
            />
          </div>
          <div className="col">
            <Table
              data={pagination}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Paginate
              pages={filtered}
              onPaginate={this.handlePagination}
              startPageIndex={startPageIndex}
              pageSize={pageSize}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MoviesTable;
