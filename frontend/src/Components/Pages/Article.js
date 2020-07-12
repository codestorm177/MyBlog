import React from 'react';
import ArticleList from './ArticleList';
import NotFound from './NotFound';


class Article extends React.Component {

    render() {
        const name = this.props.match.params.name;
        const articleContent = this.props.articleContent;        
        const article = articleContent.find(article => article.name === name);
        if (!article) return <NotFound />
        const filteredArticles = articleContent.filter(currArticle => currArticle !== article);

        return (
            <>
                <h1>{article.title}</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}

                <h3>Other Articles You Might Enjoy...</h3>
                <ArticleList articleContent={filteredArticles} />

                
            </>
        )
    }
}

export default Article;