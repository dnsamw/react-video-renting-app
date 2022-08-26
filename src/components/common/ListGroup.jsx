import React from 'react';

// onSelectListItem - Function
// slectedItem - Object
// listItems - Arrray of Objects

function ListGroup({ listItems, slectedItem, onSelectListItem }) {
  return (
    <ul className="list-group">
      <li
        onClick={() => onSelectListItem(null)}
        className={
          slectedItem === null
            ? 'list-group-item clickable active'
            : 'list-group-item clickable'
        }
      >
        All Genres
      </li>
      {listItems.map((listItem) => (
        <li
          onClick={() => onSelectListItem(listItem)}
          key={listItem._id}
          className={
            slectedItem?._id === listItem._id
              ? 'list-group-item clickable active'
              : 'list-group-item clickable'
          }
        >
          {listItem.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
