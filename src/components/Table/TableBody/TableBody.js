import React from 'react';
import './TableBody.css';

const TableBody = ({ restaurants }) => {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre}</td>
          <td>{restaurant.attire}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
