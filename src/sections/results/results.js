import React, { useState } from 'react';
import EventsList from '../../components/events';
import TogglePanel from '../../components/toggle-panel';
import { MatchesSetting } from '../../settings';

const ResultsSection = () => {
    const [currentToggle, setCurrentToggle] = useState('Matches');

    const onToggleClick = ({ target: { textContent: value } }) => {
        setCurrentToggle(value);
    }
    return (
        <section className="results container">
            <h2 className="results__title">Расписание и результаты</h2>
            <TogglePanel currentToggle={currentToggle} onToggleClick={onToggleClick} />
            <EventsList currentList={currentToggle} events={MatchesSetting} />
        </section>

    )
}

export default ResultsSection;