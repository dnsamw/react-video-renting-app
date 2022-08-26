import React from 'react';

//headerElements - Array
//onSort - Function

function TableHeader({ headerElements, onSort }) {
  return (
    <thead>
      <tr>
        {headerElements.map((element) => (
          <th
            className="clickable"
            onClick={
              element.label
                ? () => {
                    onSort(element.path);
                  }
                : null
            }
            scope="col"
          >
            {element.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
