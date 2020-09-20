import React from 'react';
import './TableFooter.css';

const TableFooter = ({ restaurants, totalPages, setPage }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan="6">
          <div className="links center">
            {!!restaurants.length &&
              Array.from(Array(totalPages + 1).keys()).map((page) => (
                <button key={page} onClick={() => setPage(page + 1)}>
                  {page + 1}
                </button>
              ))}
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
