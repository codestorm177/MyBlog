import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';

class App extends React.Component {
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;
