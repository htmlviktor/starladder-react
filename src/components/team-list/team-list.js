import React from 'react';

const TeamList = ({ teams }) => {
    return (
        <ul className="team__list">
            {teams.map(({id, name, country}) => (
                <li key={id} className="team__item">
                    <a href className="team__link">
                        <span className="team__player-number">{id}</span>
                        <span className={`team__player-name team__player-name--${country}`}>{name}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default TeamList;