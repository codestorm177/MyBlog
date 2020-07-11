import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Article from './Article';
import ArticleList from './ArticleList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} exact /> 
          <Route path="/about" component={About} />
          <Route path="/articlelist" component={ArticleList} />
          <Route path="/article" component={Article} />      
        </div>
      </Router>
      
      
    )
  }
}

export default App;
