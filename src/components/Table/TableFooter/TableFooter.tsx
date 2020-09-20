import * as React from 'react';
import './TableFooter.css';
import { Restaurant } from '../../../utils/constants';

type Props = {
  restaurants: Restaurant[];
  totalPages: number;
  setPage(page: number): void;
};

const TableFooter: React.FC<Props> = ({ restaurants, totalPages, setPage }) => {
  let pageArray = [];
  for (let i = 0; i < totalPages + 1; i++) {
    pageArray.push(i);
  }
  return (
    <tfoot>
      <tr>
        <td colSpan={6}>
          <div className="links center">
            {!!restaurants.length &&
              pageArray.map((page) => (
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
