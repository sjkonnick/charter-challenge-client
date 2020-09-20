import React from 'react';
import './Table.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const Table = ({
  restaurants,
  totalPages,
  nameSort,
  stateSort,
  state,
  genre,
  attire,
  setPage,
  handleStateChange,
  handleGenreChange,
  handleAttireChange,
  handleNameSort,
  handleStateSort,
}) => {
  return (
    !!restaurants.length && (
      <table className="blue-table">
        <TableHeader
          nameSort={nameSort}
          stateSort={stateSort}
          state={state}
          genre={genre}
          attire={attire}
          handleStateChange={handleStateChange}
          handleGenreChange={handleGenreChange}
          handleAttireChange={handleAttireChange}
          handleNameSort={handleNameSort}
          handleStateSort={handleStateSort}
        />
        <TableBody restaurants={restaurants} />
        <TableFooter restaurants={restaurants} totalPages={totalPages} setPage={setPage} />
      </table>
    )
  );
};

export default Table;
