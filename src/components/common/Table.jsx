import React from 'react';

//data - Array
//onLike - Function
//onDelete - Function

function Table({ data, onLike, onDelete }) {
  return (
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
        {data.map((movie) => (
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
                onClick={() => onLike(movie)}
              ></i>
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
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
  );
}

export default Table;
