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

                <button onClick={() => this.props.handleUpvote(name)}>Upvote!</button>
                <p>This article has {articleInfo.upvotes} upvotes.</p>              


                {articleContent.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}

                <CommentList comments={articleComments} />

                <h3>Other Articles You Might Enjoy...</h3>
                <List articlesContent={filteredArticles} />                
            </>
        )
    }
}

export default Article;