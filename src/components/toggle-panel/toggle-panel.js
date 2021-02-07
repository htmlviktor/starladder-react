import React from 'react';
import { ToggleList } from '../../settings';

const TogglePanel = ({ currentToggle, onToggleClick }) => {
    return (
        <div className="results__toggle-panel toggle-panel">
            {ToggleList.map(({ id, name }) => (
                <button
                    key={id}
                    onClick={onToggleClick}
                    className={`toggle-panel__btn ${currentToggle === name && 'toggle-panel__btn--active'}`}>
                    {name}
                </button>
            ))}
        </div>
    )
}

export default TogglePanel;