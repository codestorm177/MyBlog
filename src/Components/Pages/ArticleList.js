import React from 'react';
import {Link} from 'react-router-dom';



class ArticleList extends React.Component {
    
    render() {
        const articleContent = this.props.articleContent;
        return (
            <>
                <h1>Articles Featured on Our Blog:</h1>
                {articleContent.map(article => (
                    <Link to={`/article/${article.name}`}>
                        <h3>{article.title}</h3>
                    </Link>
                ))}

               

                
            </>
        )
    }
}

export default ArticleList;