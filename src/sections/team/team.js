import React from 'react';
import MoreLinks from '../../components/more-links';
import RegisterSteps from '../../components/register-steps';
import TeamList from '../../components/team-list';

const TeamSection = () => {
    return (
        <div className="stages-of__team-list team">
            <p className="team__registered">Зарегистрировано: 24</p>
            <div className="team__head">
                <span className="team__head-placeholder">#</span>
                <span className="team__head-placeholder">Команда</span>
            </div>
            <div className="stages-of__wrapper">
                <div className="stages-of__box">
                    <TeamList />
                </div>
                <div className="stages-of__box">
                    <RegisterSteps />
                    <MoreLinks />
                </div>
            </div>
        </div>
    )
}

export default TeamSection;