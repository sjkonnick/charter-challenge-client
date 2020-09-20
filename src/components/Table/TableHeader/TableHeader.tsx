import * as React from 'react';
import { FormEvent } from 'react';
import './TableHeader.css';
import { genres, states, attires } from '../../../utils/constants';

type Props = {
  nameSort: string;
  stateSort: string;
  state: string;
  genre: string;
  attire: string;
  handleStateChange(event: FormEvent<HTMLSelectElement>): void;
  handleGenreChange(event: FormEvent<HTMLSelectElement>): void;
  handleAttireChange(event: FormEvent<HTMLSelectElement>): void;
  handleNameSort(): void;
  handleStateSort(): void;
};

const TableHeader: React.FC<Props> = ({
  nameSort,
  stateSort,
  state,
  genre,
  attire,
  handleStateChange,
  handleGenreChange,
  handleAttireChange,
  handleNameSort,
  handleStateSort,
}) => {
  return (
    <thead>
      <tr>
        <th className="header-row cursor" onClick={handleNameSort} style={{ width: 200 }}>
          <div className="column-title">Name </div>
          <div className="filter-container">
            <div className={nameSort === 'ASC' ? 'arrow-up' : nameSort === 'DESC' ? 'arrow-down' : ''}></div>
          </div>
        </th>
        <th style={{ width: 150 }}>City</th>
        <th className="header-row cursor" onClick={handleStateSort} style={{ width: 130 }}>
          <div className="column-title">State</div>
          <div className="filter-container">
            <div className={stateSort === 'ASC' ? 'arrow-up' : stateSort === 'DESC' ? 'arrow-down' : ''}></div>
            <select
              className="drop-down"
              name="states"
              value={state}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={handleStateChange}
            >
              {states.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </th>
        <th>Telephone</th>
        <th className="header-row">
          <div className="column-title">Genres</div>
          <div className="filter-container">
            <select
              className="drop-down"
              name="genre"
              value={genre}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={handleGenreChange}
            >
              {genres.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </th>
        <th>
          <div className="header-row">
            <div className="column-title">Attire</div>
            <div className="filter-container">
              <select
                className="drop-down"
                name="attire"
                value={attire}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={handleAttireChange}
              >
                {attires.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
