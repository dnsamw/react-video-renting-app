import React from 'react';

//headerElements - Array
function TableHeader({ headerElements }) {
  return (
    <thead>
      <tr>
        {headerElements.map((element) => (
          <th scope="col">{element.label}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
