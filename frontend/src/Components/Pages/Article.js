import React from 'react';

import List from './List';
import NotFound from './NotFound';
import CommentList from './CommentList';


class Article extends React.Component {       

    render() {
        const name = this.props.match.params.name;
        const articlesContent = this.props.articlesContent;        
        const articleContent = articlesContent.find(article => article.name === name);
        if (!articleContent) return <NotFound />
        const filteredArticles = articlesContent.filter(currArticle => currArticle !== articleContent);

        const articleInfo = this.props.articlesInfo.find(article => article.name ===  name); 
        const articleComments = JSON.parse(articleInfo.comments)
        console.log(articleComments);   
    
        return (
            <>
                <h1>{articleContent.title}</h1>

                <div className="article-content">
                    {articleContent.content.map((paragraph, key) => {
                        return (
                        <div>
                            <br />
                            <p key={key} className="article-para">{paragraph}</p>
                        </div>
                        )}
                    )}
                </div>
                
                <div className="upvote-button">
                    <button onClick={() => this.props.handleUpvote(name)}>Upvote!</button>
                    <span>{articleInfo.upvotes}</span>
                </div>                

                <CommentList comments={articleComments} addComment={this.props.addComment} name={name} />

                <h3>Other Articles You Might Enjoy...</h3>
                <List articlesContent={filteredArticles} />                
            </>
        )
    }
}

export default Article;