import React from 'react';

const BattleDefault = ({ battle }) => {
    const { id, firstPlayer, secondPlayer, live, startDate, timeHours, timeDay } = battle;
    return (
        <div className="events__item event">
            <span className="event__pre-wrapper">
                <span className="event__pre-title">Group Stage</span>
                <span className="event__pre-times">
                    <span className="event__time">{timeHours}</span>
                    <span className="event__date">{timeDay}</span>
                </span>
            </span>
            <span className="event__teams">
                <span href className="event__team-link"><img src={firstPlayer.teamLogo} /></span>
            </span>
            <span className="event__battle-wrapper">
                <span className="event__battle-box">
                    <span className="event__coefficient-wrapper">
                        <span className="event__player-name">Group A</span>
                    </span>
                    <span className="event__coefficient-wrapper">
                        <span className="event__player-name">Group B</span>
                    </span>
                </span>
                <span className="event__coefficient-content">Match #{id}</span>
            </span>
            <span className="event__copy">
                <span>{startDate}</span>
            </span>
        </div>
    )
}

const BattleLive = ({ battle }) => {
    const { id, startDate } = battle;
    return (
        <a className="events__item event event--live" href="#">
            <span className="event__pre-wrapper">
                <span className="event__pre-title">Asia Minor: Play-Off</span>
                <span className="event__pre-times">
                    <span href="#" className="event__watch-live">Watch Live!</span>
                </span>
            </span>
            <span className="event__teams">
                <span href className="event__team-link"><img src="img/teams/1.png" /></span>
            </span>
            <span className="event__battle-wrapper">
                <span className="event__battle-box">
                    <span className="event__coefficient-wrapper">
                        <span className="event__player-name">Group A</span>
                    </span>
                    <span className="event__coefficient-wrapper">
                        <span className="event__player-name">Group B</span>
                    </span>
                </span>
                <span className="event__coefficient-content">Match #{id}</span>
            </span>
            <span className="event__copy">
                <span>{startDate}</span>
            </span>
        </a>
    )
}

const Battle = ({ battle }) => {
    return battle.live ? <BattleLive battle={battle} /> : <BattleDefault battle={battle} />
}

export default Battle;