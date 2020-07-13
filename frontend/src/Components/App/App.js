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
    super(props);
    this.state = {
      articleContent: articleContent,
      articleInfo: [],
      isLoaded: false,
    };

    this.handleUpvote = this.handleUpvote.bind(this);    
  }

  componentDidMount() {    
    fetch('/api/articles')
      .then(response => response.json())
      .then(jsonResponse => this.setState({articleInfo: jsonResponse}))
      .then(() => this.setState({isLoaded: true})); 
  }



  handleUpvote(name) {
    fetch(`/api/articles/${name}/upvote`, {method: 'post'})
    .then(response => response.json())
    .then(jsonResponse => {
      const oldInfo = this.state.articleInfo;
      const index = oldInfo.findIndex(article => article.name = jsonResponse.name);
      oldInfo[index] = jsonResponse;
      this.setState({articleInfo: oldInfo});
    });    

  }
   
  render() {
    return (
      
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/about" component={About} />
            {
              this.state.isLoaded ? 
              <>
                <Route path="/articlelist" render={(props) => (<ArticleList articlesContent={this.state.articleContent} articlesInfo={this.state.articleInfo} {...props} />)}/>
                <Route path="/article/:name" render={(props) => (<Article articlesContent={this.state.articleContent} articlesInfo={this.state.articleInfo} handleUpvote={this.handleUpvote} {...props} />)} />             
              </>
              : ""
            }
            
            <Route component={NotFound} />
          </Switch>         
                
        </div>
      </Router>
      
      
    )
  }
}

export default App;
