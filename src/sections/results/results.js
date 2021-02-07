import React from 'react';
import EventsList from '../../components/events';
import TogglePanel from '../../components/toggle-panel';

const ResultsSection = () => {
    return (
        <section className="results container">
            <h2 className="results__title">Расписание и результаты</h2>
            <TogglePanel />
            <EventsList />
        </section>

    )
}

export default ResultsSection;