import * as React from 'react';
import { FormEvent } from 'react';
import './Table.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { Restaurant } from '../../utils/constants';

type Props = {
  restaurants: Restaurant[];
  totalPages: number;
  nameSort: string;
  stateSort: string;
  state: string;
  genre: string;
  attire: string;
  setPage(page: number): void;
  handleStateChange(event: FormEvent<HTMLSelectElement>): void;
  handleGenreChange(event: FormEvent<HTMLSelectElement>): void;
  handleAttireChange(event: FormEvent<HTMLSelectElement>): void;
  handleNameSort(): void;
  handleStateSort(): void;
};

const Table: React.FC<Props> = ({
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
  );
};

export default Table;
