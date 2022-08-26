import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

//data - Array
//onLike - Function
//onDelete - Function

function Table({ data, onLike, onDelete }) {
  const headerElements = [
    { name: 'title', label: 'Title' },
    { name: 'genre', label: 'Genre' },
    { name: 'stock', label: 'Stock' },
    { name: 'rate', label: 'Rate' },
    { name: 'like', label: '' },
    { name: 'delete', label: '' },
  ];
  return (
    <table className="table">
      <TableHeader headerElements={headerElements} />
      <TableBody data={data} onLike={onLike} onDelete={onDelete} />
    </table>
  );
}

export default Table;
