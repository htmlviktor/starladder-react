import React from 'react';

const EventLive = ({ event }) => {
    const { firstPlayer, secondPlayer, startDate } = event;
    return (
        <a className="events__item event event--live" href="/">
            <span className="event__pre-wrapper">
                <span className="event__pre-title">Asia Minor: Play-Off</span>
                <span className="event__pre-times">
                    <span href="/" className="event__watch-live">Watch Live!</span>
                </span>
            </span>
            <span className="event__teams">
                <span className="event__team-link"><img src="img/teams/1.png" alt="Логотип первой команды" /></span>
                <span className="event__team-link"><img src="img/teams/2.png" alt="Логотип второй команды" /></span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">{firstPlayer.name}</span>
                <span className="event__coefficient-content">{firstPlayer.coff}</span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">{secondPlayer.name}</span>
                <span className="event__coefficient-content">{secondPlayer.coff}</span>
            </span>
            <span className="event__copy">
                <span>{startDate}</span>
                <img src="img/leader-logo.png" alt="Логотип агенства" />
            </span>
        </a>
    )
}

const EventDefault = ({ event }) => {
    const { firstPlayer, secondPlayer, live, startDate, timeHours, timeDay } = event;    
    return (
        <div className="events__item event">
            <span className="event__pre-wrapper">
                <span className="event__pre-title">Asia Minor: Play-Off</span>
                <span className="event__pre-times">
                    <span className="event__time">{timeHours}</span>
                    <span className="event__date">{timeDay}</span>
                </span>
                
            </span>
            <span className="event__teams">
                <span className="event__team-link"><img src={firstPlayer.teamLogo} /></span>
                <span className="event__team-link"><img src={secondPlayer.teamLogo} /></span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">{firstPlayer.name}</span>
                <span className="event__coefficient-content">3.22</span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">{secondPlayer.name}</span>
                <span className="event__coefficient-content">3.22</span>
            </span>
            <span className="event__copy">
                <span>{startDate}</span>
                <img src="img/leader-logo.png" alt="Логотип агенства" />
            </span>
        </div>
    )
}

const Event = ({event}) => {
    return event.live ? <EventLive event={event}/> : <EventDefault event={event}/>
}

export default Event;