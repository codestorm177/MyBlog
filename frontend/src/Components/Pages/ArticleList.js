import React from 'react';

import List from './List';



class ArticleList extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Articles Featured on Our Blog</h1>
                <List articlesContent={this.props.articlesContent}/>
            </div>            
        )
    }
}

export default ArticleList;