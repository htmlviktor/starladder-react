import React from 'react';

const Event = () => {
    return (
        <a className="events__item event event--live" href="#">
            <span className="event__pre-wrapper">
                <span className="event__pre-title">Asia Minor: Play-Off</span>
                <span className="event__pre-times">
                    <span className="event__time">19:00</span>
                    <span className="event__date">29 октября</span>
                </span>
                <span className="event__pre-times">
                    <span href="#" className="event__watch-live">Watch Live!</span>
                </span>
            </span>
            <span className="event__teams">
                <span href className="event__team-link"><img src="img/teams/1.png" alt /></span>
                <span href className="event__team-link"><img src="img/teams/2.png" alt /></span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">Albert Warren</span>
                <span className="event__coefficient-content">3.22</span>
            </span>
            <span className="event__coefficient-wrapper">
                <span className="event__player-name">Albert Warren</span>
                <span className="event__coefficient-content">3.22</span>
            </span>
            <span className="event__copy">
                <span>Starts in: 5 hours 39 min • Bо 3</span>
                <img src="img/leader-logo.png" alt />
            </span>
        </a>
    )
}

export default Event;