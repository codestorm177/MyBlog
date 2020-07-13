import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component {
    render() {
        const articlesContent = this.props.articlesContent;
        return (
            <div className="article-container">
                {articlesContent.map(article => (
                    <div key={article.name} className="article-item">
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

export default List;