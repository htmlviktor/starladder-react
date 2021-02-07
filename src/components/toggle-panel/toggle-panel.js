import React from 'react';

const TogglePanel = () => {
    return (
        <div className="results__toggle-panel toggle-panel">
            <button className="toggle-panel__btn toggle-panel__btn--active">Matches</button>
            <button className="toggle-panel__btn">Battles</button>
        </div>
    )
}

export default TogglePanel;