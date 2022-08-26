import React from 'react';

// pages - Array
// onPaginate - Function
// startPageIndex - Number
// pageSize - Number

function Paginate({ pages, onPaginate, startPageIndex, pageSize }) {
  const pagesArr = [...pages];
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {Array(Math.ceil(pagesArr.length / 4))
            .fill('')
            .map((_, index) => (
              <li
                onClick={() => onPaginate(index)}
                key={index}
                className="page-item"
              >
                <span
                  className={
                    startPageIndex / pageSize === index
                      ? 'page-link clickable active'
                      : 'page-link clickable'
                  }
                >
                  {1 + index}
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}

export default Paginate;
