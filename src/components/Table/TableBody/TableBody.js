import React from 'react';
import './TableBody.css';

const TableBody = ({ restaurants }) => {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td style={{ width: 200 }}>{restaurant.name}</td>
          <td style={{ width: 150 }}>{restaurant.city}</td>
          <td style={{ width: 130 }}>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre}</td>
          <td>{restaurant.attire}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
