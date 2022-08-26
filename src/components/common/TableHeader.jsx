import React from 'react';

//headerElements - Array
//onSort - Function
//sortOrder - String asc,desc
//sortColumn - Object (order,path)

function TableHeader({ headerElements, onSort, sortColumn }) {
  
  const renderIcon = (element) => {
    const column = { ...sortColumn };
    if (element.path !== column.path) return null;
    if (column.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    if (column.order === 'desc') return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {headerElements.map((element, i) => (
          <th
            key={i}
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
            {element.label} {renderIcon(element)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
