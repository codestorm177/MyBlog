import React from 'react';
import {Link} from 'react-router-dom';



class ArticleList extends React.Component {
    
    render() {
        const articleContent = this.props.articleContent;
        return (
            <div className="article-container">
                <h1>Articles Featured on Our Blog:</h1>
                {articleContent.map(article => (
                    <div className="article-item">
                        <Link to={`/article/${article.name}`} className="article-link">
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0,175)}...</p>
                        </Link>
                    </div>
                ))}              

                
            </div>
        )
    }
}

export default ArticleList;