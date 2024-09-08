// src/repComp1.jsx
import React from 'react';

// User component to display individual user information
const User = ({ id, name }) => {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

// UserList component that renders a list of User components
const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => (
                <User key={user.id} id={user.id} name={user.name} />
            ))}
        </div>
    );
};

export { UserList }; // Export the UserList component
