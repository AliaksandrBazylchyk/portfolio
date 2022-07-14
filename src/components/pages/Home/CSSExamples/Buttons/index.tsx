import React from 'react'

import './styles.scss'

const Buttons: React.FC = () => {
    return (
        <div className="buttons">
            <button className="buttons__hover-button">Button</button>
            <button className="buttons__glow-button">Button</button>
            <div className="buttons__snake-button">Button</div>
            <button  className="buttons__bordered-button">Button</button>
        </div>
    )
}

export default Buttons
