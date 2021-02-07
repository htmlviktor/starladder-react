import React from 'react';
import { MatchesSetting } from '../../settings';
import Battle from '../battle';
import Event from '../event';


const getCurrentList = (events, type) => {
    switch (type) {
        case 'Matches':
            return events.map((event) => <Event key={event.id} event={event} />)
        case 'Battles':
            return events.map((battle) => <Battle key={battle.id} battle={battle} />)
        default: <p>Нет никаких событий...</p>
    }
}

const EventsList = ({ events, currentList }) => {
    return (
        <div className="results__events events">
            {getCurrentList(events, currentList)}
        </div>
    )
}

export default EventsList;