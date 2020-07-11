import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Article from '../Pages/Article';
import ArticleList from '../Pages/ArticleList';
import NavBar from '../Pages/NavBar';
import articleContent from '../../article-content';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: articleContent
    };
  }
  render() {
    return (
      
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/about" component={About} />
            <Route path="/articlelist" render={(props) => (<ArticleList articleContent={this.state.articles} {...props} />)}/>
            <Route path="/article/:name" render={(props) => (<Article articleContent={this.state.articles} {...props} />)} />
            <Route component={NotFound} />
          </Switch>
          
                
        </div>
      </Router>
      
      
    )
  }
}

export default App;
