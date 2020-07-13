import React from 'react';

import List from './List';
import NotFound from './NotFound';


class Article extends React.Component {

       

    render() {
        const name = this.props.match.params.name;
        const articlesContent = this.props.articlesContent;        
        const articleContent = articlesContent.find(article => article.name === name);
        if (!articleContent) return <NotFound />
        const filteredArticles = articlesContent.filter(currArticle => currArticle !== articleContent);
        const articleInfo = this.props.articlesInfo.find(article => article.name ===  name); 
    
    
        return (
            <>
                <h1>{articleContent.title}</h1>
                <span>This article has <strong>{articleInfo.upvotes}</strong> upvotes.</span>
                {articleContent.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}

                <h3>Other Articles You Might Enjoy...</h3>
                <List articlesContent={filteredArticles} />                
            </>
        )
    }
}

export default Article;