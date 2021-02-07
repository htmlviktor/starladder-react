import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__line">
                <div className="container">
                    <img src="img/company-logo.svg" width={50} height={50} alt className="header__line-logo" />
                </div>
            </div>
            <section className="header__info container">
                <div className="header__info-box">
                    <img src="img/game-logo.png" width={191} height={60} alt className="header__game-logo" />
                    <h1 className="header__title title">StarSeries i-League CSGO Season 8</h1>
                    <div className="header__description">
                        <p className="header__description-content">Parimatch League CS:GO is the new online league in
                        Counter-Strike:
                        Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from
                        Europe
                        and
          the CIS will take part in the League, with 4 teams going to League through open qualifiers.</p>
                    </div>
                    <div className="header__btns-wrapper">
                        <a href className="header__link button button--more">Read Announcement</a>
                        <a href className="header__link button button--get">Get Tickets</a>
                    </div>
                </div>
                <div className="header__info-box header__info-more">
                    <ul className="header__place-list">
                        <li><span>Место:</span> <span>Берлин, Германия</span></li>
                        <li><span>Даты:</span> <span>22 Сентября – 30 Октября 2020</span></li>
                        <li><span>Призы:</span> <span>$1,000,000</span></li>
                    </ul>
                    <div className="header__social-list">
                        <a href className="header__social-link">
                            <span className="visually-hidden">Twitter</span>
                            <svg viewBox="0 0 100 100" width={27} height={27}>
                                <use xlinkHref="img/sprite/sprite.svg#twitter" />
                            </svg>
                        </a>
                        <a href className="header__social-link">
                            <span className="visually-hidden">Discord</span>
                            <svg viewBox="0 0 100 100" width={27} height={27}>
                                <use xlinkHref="img/sprite/sprite.svg#discord" />
                            </svg>
                        </a>
                        <a href className="header__social-link">
                            <span className="visually-hidden">Facebook</span>
                            <svg viewBox="0 0 100 100" width={27} height={27}>
                                <use xlinkHref="img/sprite/sprite.svg#facebook" />
                            </svg>
                        </a>
                        <a href className="header__social-link">
                            <span className="visually-hidden">Vkontakte</span>
                            <svg viewBox="0 0 100 100" width={27} height={27}>
                                <use xlinkHref="img/sprite/sprite.svg#vk" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </header>

    )
}

export default Header;