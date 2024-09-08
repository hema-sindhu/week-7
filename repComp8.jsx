// src/repComp8.jsx
import React from 'react';

// Define the Event component
const Event = ({ event }) => (
    <div>
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
    </div>
);

// Define the EventList component
export const EventList = ({ events }) => (
    <div>
        {events.map(event => (
            <Event key={event.id} event={event} />
        ))}
    </div>
);
