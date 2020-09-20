import * as React from 'react';
import './TableBody.css';
import { Restaurant } from '../../../utils/constants';

type Props = {
  restaurants: Restaurant[];
};

type State = {
  showModal: boolean;
  restaurant: Restaurant;
};

class TableBody extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      restaurant: null,
    };
  }

  render() {
    return (
      <tbody>
        {this.props.restaurants.map((restaurant) => (
          <tr
            key={restaurant.id}
            onClick={() => {
              this.setState({ showModal: true, restaurant });
            }}
          >
            <td style={{ width: 200 }}>{restaurant.name}</td>
            <td style={{ width: 150 }}>{restaurant.city}</td>
            <td style={{ width: 130 }}>{restaurant.state}</td>
            <td>{restaurant.telephone}</td>
            <td>{restaurant.genre}</td>
            <td>{restaurant.attire}</td>
          </tr>
        ))}
        {!!this.state.showModal && (
          <tr>
            <td className="modal">
              <img
                alt="clear"
                className="modal-clear-icon"
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                onClick={() => this.setState({ showModal: false, restaurant: null })}
              />
              <span>Additional Details:</span>
              <br />
              <span>{this.state.restaurant.address1}</span>
              <span>
                {this.state.restaurant.city}, {this.state.restaurant.state} {this.state.restaurant.zip}
              </span>
              <span>{this.state.restaurant.telephone}</span>
              <br />
              <a className="cursor" href={this.state.restaurant.website} target="_blank">
                Website
              </a>
              <br />
              <a
                className="cursor"
                href={`https://www.google.com/maps/search/?api=1&query=${this.state.restaurant.lat},${this.state.restaurant.long}`}
                target="_blank"
              >
                Map
              </a>
            </td>
          </tr>
        )}
        {!this.props.restaurants.length && (
          <tr>
            <td colSpan={6}>
              <div className="no-results">No Results Found</div>
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}

export default TableBody;
