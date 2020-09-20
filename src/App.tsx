import * as React from 'react';
import { KeyboardEvent, FormEvent } from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { Restaurant } from './utils/constants';

type Props = {};

type State = {
  restaurants: Restaurant[];
  totalPages: number;
  page: number;
  search: string;
  state: string;
  genre: string;
  attire: string;
  nameSort: string;
  stateSort: string;
  hasLoaded: boolean;
};

class App extends React.Component<Props, State> {
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
      hasLoaded: false,
    };
  }

  callAPI = () => {
    fetch(
      `http://localhost:3001/restaurants?page=${this.state.page}&search=${this.state.search}&state=${this.state.state}&genre=${this.state.genre}&attire=${this.state.attire}&nameSort=${this.state.nameSort}&stateSort=${this.state.stateSort}`,
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          restaurants: res.data,
          totalPages: res.totalPages,
          hasLoaded: true,
        });
      })
      .catch((err) => err);
  };

  componentDidMount() {
    this.callAPI();
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.callAPI();
    }
  };

  setClearListener = () => {
    this.setState({ search: '' }, this.callAPI);
  };

  setPage = (page: number) => {
    this.setState({ page }, this.callAPI);
  };

  handleSearch = (search: string) => {
    this.setState({
      search,
      page: 1,
    });
  };

  handleStateChange = (event: FormEvent<HTMLSelectElement>) => {
    const state: string = event.currentTarget.value;
    this.setState(
      {
        state,
        page: 1,
      },
      this.callAPI,
    );
  };

  handleGenreChange = (event: FormEvent<HTMLSelectElement>) => {
    const genre: string = event.currentTarget.value;
    this.setState(
      {
        genre,
        page: 1,
      },
      this.callAPI,
    );
  };

  handleAttireChange = (event: FormEvent<HTMLSelectElement>) => {
    const attire: string = event.currentTarget.value;
    this.setState(
      {
        attire,
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
    if (!this.state.hasLoaded) {
      return null;
    }

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
      </div>
    );
  }
}

export default App;
