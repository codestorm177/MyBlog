import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Home from '../Pages/Home';
import About from '../Pages/About';
import UserLogin from '../Login/UserLogin';
import Article from '../Pages/Article';
import ArticleList from '../Pages/ArticleList';
import NavBar from '../Pages/NavBar';
import articleContent from '../../article-content';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToDisplay: "Login/ Register",
      articleContent: articleContent,
      articleInfo: [],
      isLoaded: false,
      user: {
        username: '',
        password: '',
        isLoggedIn: false,        
      }
    };

    this.handleUpvote = this.handleUpvote.bind(this);    
    this.addComment = this.addComment.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.registerLogin = this.registerLogin.bind(this);
  }

  componentDidMount() {    
    fetch('/api/articles')
      .then(response => response.json())
      .then(jsonResponse => this.setState({articleInfo: jsonResponse}))
      .then(() => this.setState({isLoaded: true})); 
  }

  handleUpvote(name) {
    fetch(`/api/articles/${name}/upvote?user=${this.state.user.username}`, {method: 'post'})
    .then(response => response.json())
    .then(jsonResponse => {
      const oldInfo = this.state.articleInfo;
      const index = oldInfo.findIndex(article => article.name = jsonResponse.name);
      oldInfo[index] = jsonResponse;
      this.setState({articleInfo: oldInfo});
    });    

  }

  addComment(state, name) {    
    fetch(`/api/articles/${name}/comment`, {
        method: 'post',
        body: JSON.stringify({username: this.state.user.username, text: state.comment}),
        headers: {
          'Content-Type': 'application/json',
        }
      }
      ).then(response => response.json())
      .then(jsonResponse => {
        const oldInfo = this.state.articleInfo;
        const index = oldInfo.findIndex(article => article.name = jsonResponse.name);
        oldInfo[index] = jsonResponse;
        this.setState({articleInfo: oldInfo});
      });
  }

  validateLogin(user, passcode) {
    fetch(`/api/${user}/login`)
      .then(response => {
        if (response.status === 204) {
          alert("Incorrect username/Try again")
          return Promise.reject("incorrectlogin")
        }
        else {
          return response.json();
        }
      })
      .then(jsonResponse => {
        const username = jsonResponse.username;
        const password = jsonResponse.password;
        if (passcode !== password) {
          alert("Incorrect password/Try again")
        }
        else {
          this.setState(
            {user:
              {
            username: username,
            password: password,
            isLoggedIn: true
              },
            textToDisplay: "Welcome "
            },            
          );
          alert("Logged in!  Feel free to comment and upvote articles now!")          
        }
      });
           
  }

  registerLogin(user, passcode) {
    fetch(`/api/register`, {
      method: 'post',
      body: JSON.stringify({username: user, password: passcode}),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 409) {
          alert("You already have an account. Try logging in.")
        }    
        else if (response.ok) {
          alert("Account successfully created.  Try logging in.")
        }    
      });
  }
   
  render() {
    return (
      
      <Router>
        <NavBar textToDisplay={this.state.textToDisplay + this.state.user.username} />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/login" render={(props) => (<UserLogin validateLogin={this.validateLogin} registerLogin={this.registerLogin} isLoggedIn={this.state.user.isLoggedIn} {...props} /> )} />
            <Route path="/about" component={About} />
            {
              this.state.isLoaded ? 
              <>
                <Route path="/articlelist" render={(props) => (<ArticleList articlesContent={this.state.articleContent} articlesInfo={this.state.articleInfo} {...props} />)}/>
                <Route path="/article/:name" render={(props) => (<Article articlesContent={this.state.articleContent} articlesInfo={this.state.articleInfo} handleUpvote={this.handleUpvote} isLoggedIn={this.state.user.isLoggedIn} addComment={this.addComment} {...props} />)} />             
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
