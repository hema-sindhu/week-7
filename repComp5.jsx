// src/repComp5.jsx
import React from 'react';

// Comment component to display individual comments
const Comment = ({ author, content }) => {
    return (
        <div>
            <h4>{author}</h4>
            <p>{content}</p>
        </div>
    );
};

// CommentList component that renders a list of Comment components
const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} author={comment.author} content={comment.content} />
            ))}
        </div>
    );
};

export { CommentList }; // Export the CommentList component
