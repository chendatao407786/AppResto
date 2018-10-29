import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantList from './components/RestaurantList';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    )
  }
}

export default App;
