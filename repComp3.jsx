// src/repComp3.jsx
import React from 'react';

// Task component to display individual task information
const Task = ({ description, completed }) => {
    return (
        <div>
            <p>
                {description} - {completed ? "Completed" : "Not Completed"}
            </p>
        </div>
    );
};

// TaskList component that renders a list of Task components
const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} description={task.description} completed={task.completed} />
            ))}
        </div>
    );
};

export { TaskList }; // Export the TaskList component
