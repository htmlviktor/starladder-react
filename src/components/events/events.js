import React from 'react';
import Event from '../event';

const EventsList = ({events}) => {
    return (
        <div className="results__events events">
            {events.map((event) => (
                <Event event={event}/>
            ))}
        </div>
    )
}

export default EventsList;