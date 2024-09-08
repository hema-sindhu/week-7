// src/repComp2.jsx
import React from 'react';

// Article component to display individual article information
const Article = ({ title, content }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

// ArticleList component that renders a list of Article components
const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map(article => (
                <Article key={article.id} title={article.title} content={article.content} />
            ))}
        </div>
    );
};

export { ArticleList }; // Export the ArticleList component
