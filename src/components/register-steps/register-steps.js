import React from 'react';

const RegisterSteps = () => {
    return (
        <>
            <div className="stages-of__register-steps register-steps">
                <div className="register-steps__item register-steps__item--active">
                    <div className="register-steps__item-icon">
                        <svg width={24} height={24} viewBox="0 0 100 100">
                            <use xlinkHref="img/sprite/sprite.svg#trophy" />
                        </svg>
                    </div>
                    <div className="register-steps__item-info">
                        <span className="register-steps__head">Registration:</span>
                        <span className="register-steps__time">29 sep, 19:00 – 20 nov, 10:00</span>
                    </div>
                </div>
                <div className="register-steps__item">
                    <div className="register-steps__item-icon">
                        <svg width={24} height={24} viewBox="0 0 100 100">
                            <use xlinkHref="img/sprite/sprite.svg#tools" />
                        </svg>
                    </div>
                    <div className="register-steps__item-info">
                        <span className="register-steps__head">Check-in:</span>
                        <span className="register-steps__time">29 sep, 19:00 – 20 nov, 10:00</span>
                    </div>
                </div>
                <div className="register-steps__item">
                    <div className="register-steps__item-icon">
                        <svg width={24} height={24} viewBox="0 0 100 100">
                            <use xlinkHref="img/sprite/sprite.svg#time" />
                        </svg>
                    </div>
                    <div className="register-steps__item-info">
                        <span className="register-steps__head">Scheduling:</span>
                        <span className="register-steps__time">29 sep, 19:00 – 20 nov, 10:00</span>
                    </div>
                </div>
            </div>
            <div className="register-steps__status register-steps__status--registrated">
                <span className="register-steps__status-text">Вы зарегистрированы</span>
                <span className="register-steps__status-team">Team: Natus vincere (#353)</span>
            </div>
        </>
    )
}

export default RegisterSteps;