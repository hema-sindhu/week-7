// src/repComp4.jsx
import React from 'react';

// Message component to display individual message
const Message = ({ text }) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

// MessageList component that renders a list of Message components
const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map(message => (
                <Message key={message.id} text={message.text} />
            ))}
        </div>
    );
};

export { MessageList }; // Export the MessageList component
