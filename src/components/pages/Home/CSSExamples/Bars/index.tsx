import React from 'react'

import './styles.scss'

const Bars: React.FC = () => {
    return (
        <div className="bars">
            <span> Loading bar</span>
            <span className="bars__loader" />
            <span> Slider </span>
            <div className="bars__controller">nothing do</div>
        </div>
    )
}

export default Bars
