import React from 'react';

//data - Array
//onLike - Function
//onDelete - Function

function TableBody({ data, onLike, onDelete }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
          <td>
            <i
              className={
                item.liked ? 'fa fa-heart clickable' : 'fa fa-heart-o clickable'
              }
              aria-hidden="true"
              onClick={() => onLike(item)}
            ></i>
          </td>
          <td>
            <button
              onClick={() => onDelete(item)}
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
  );
}

export default TableBody;
