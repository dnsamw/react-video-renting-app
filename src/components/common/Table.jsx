import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

//data - Array
//onLike - Function
//onDelete - Function
//onSort - Function

function Table({ data, onLike, onDelete , onSort}) {
  const headerElements = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { path: 'like', label: '' },
    { path: 'delete', label: '' },
  ];


  return (
    <table className="table">
      <TableHeader headerElements={headerElements} onSort={onSort} />
      <TableBody data={data} onLike={onLike} onDelete={onDelete} />
    </table>
  );
}

export default Table;
