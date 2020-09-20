import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      totalPages: 0,
      page: 1,
      search: '',
      state: 'ALL',
      genre: 'ALL',
      attire: 'ALL',
      nameSort: 'ASC',
      stateSort: 'OFF',
    };
  }

  callAPI = () => {
    fetch(
      `http://3.17.193.40/restaurants?page=${this.state.page}&search=${this.state.search}&state=${this.state.state}&genre=${this.state.genre}&attire=${this.state.attire}&nameSort=${this.state.nameSort}&stateSort=${this.state.stateSort}`,
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          restaurants: res.data,
          totalPages: res.totalPages,
        });
      })

      .catch((err) => err);
  };

  componentDidMount() {
    this.callAPI();
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.callAPI();
    }
  };

  setClearListener = () => {
    this.setState({ search: '' }, this.callAPI);
  };

  setPage = (page) => {
    this.setState({ page }, this.callAPI);
  };

  handleSearch = (search) => {
    this.setState({
      search,
      page: 1,
    });
  };

  handleStateChange = (event) => {
    this.setState(
      {
        state: event.target.value,
        page: 1,
      },
      this.callAPI,
    );
  };

  handleGenreChange = (event) => {
    this.setState(
      {
        genre: event.target.value,
        page: 1,
      },
      this.callAPI,
    );
  };

  handleAttireChange = (event) => {
    this.setState(
      {
        attire: event.target.value,
        page: 1,
      },
      this.callAPI,
    );
  };

  handleNameSort = () => {
    if (this.state.nameSort === 'OFF') {
      this.setState(
        {
          nameSort: 'ASC',
          stateSort: 'OFF',
        },
        this.callAPI,
      );
    } else if (this.state.nameSort === 'ASC') {
      this.setState(
        {
          nameSort: 'DESC',
          stateSort: 'OFF',
        },
        this.callAPI,
      );
    } else {
      this.setState(
        {
          nameSort: 'OFF',
          stateSort: 'OFF',
        },
        this.callAPI,
      );
    }
  };

  handleStateSort = () => {
    if (this.state.stateSort === 'OFF') {
      this.setState(
        {
          stateSort: 'ASC',
          nameSort: 'OFF',
        },
        this.callAPI,
      );
    } else if (this.state.stateSort === 'ASC') {
      this.setState(
        {
          stateSort: 'DESC',
          nameSort: 'OFF',
        },
        this.callAPI,
      );
    } else {
      this.setState(
        {
          stateSort: 'OFF',
          nameSort: 'OFF',
        },
        this.callAPI,
      );
    }
  };

  render() {
    return (
      <div className="app">
        <Header
          handleSearch={this.handleSearch}
          handleKeyDown={this.handleKeyDown}
          search={this.state.search}
          callAPI={this.callAPI}
          setClearListener={this.setClearListener}
        />
        <Table
          restaurants={this.state.restaurants}
          totalPages={this.state.totalPages}
          nameSort={this.state.nameSort}
          stateSort={this.state.stateSort}
          genre={this.state.genre}
          state={this.state.state}
          attire={this.state.attire}
          setPage={this.setPage}
          handleStateChange={this.handleStateChange}
          handleGenreChange={this.handleGenreChange}
          handleAttireChange={this.handleAttireChange}
          handleNameSort={this.handleNameSort}
          handleStateSort={this.handleStateSort}
        />
        {!this.state.restaurants.length && <div className="no-results">No Results Found</div>}
      </div>
    );
  }
}

export default App;
