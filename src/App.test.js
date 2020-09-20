import * as React from 'react';
import 'babel-polyfill';
import App from './App';
import { shallow } from 'enzyme';
import { restaurants } from './utils/testData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: restaurants.data }),
  }),
);

describe('App component suite', () => {
  it('renders and fetches restaurants', async (done) => {
    const wrapper = shallow(<App />);

    setTimeout(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(wrapper.state('restaurants')).toHaveLength(38);
      wrapper.update();
      done();
    }, 500);
  });

  it('should change search state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleSearch('testing');
      expect(wrapper.state('search')).toBe('testing');
      wrapper.update();
      done();
    }, 500);
  });

  it('should change attire state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleAttireChange({ currentTarget: { value: 'casual' } });
      expect(wrapper.state('attire')).toBe('casual');
      wrapper.update();
      done();
    }, 500);
  });

  it('should change state state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleStateChange({ currentTarget: { value: 'CO' } });
      expect(wrapper.state('state')).toBe('CO');
      wrapper.update();
      done();
    }, 500);
  });

  it('should change genre state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleGenreChange({ currentTarget: { value: 'Irish' } });
      expect(wrapper.state('genre')).toBe('Irish');
      wrapper.update();
      done();
    }, 500);
  });

  it('should alternate sorting state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleNameSort();
      expect(wrapper.state('nameSort')).toBe('DESC');
      component.handleNameSort();
      expect(wrapper.state('nameSort')).toBe('OFF');
      component.handleNameSort();
      expect(wrapper.state('nameSort')).toBe('ASC');
      wrapper.update();
      done();
    }, 500);
  });

  it('should alternate sorting state appropriately from component methods', async (done) => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      const component = wrapper.instance();
      component.handleStateSort();
      expect(wrapper.state('stateSort')).toBe('ASC');
      component.handleStateSort();
      expect(wrapper.state('stateSort')).toBe('DESC');
      component.handleStateSort();
      expect(wrapper.state('stateSort')).toBe('OFF');
      expect(wrapper.state('nameSort')).toBe('OFF');
      wrapper.update();
      done();
    }, 500);
  });
});
