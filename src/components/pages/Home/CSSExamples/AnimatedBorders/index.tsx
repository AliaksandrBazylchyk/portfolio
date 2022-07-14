import React from 'react'

import space1 from '@assets/space1.jpg'
import space2 from '@assets/space2.webp'

import './styles.scss'

const AnimatedBorders: React.FC = () => {
    return (
        <>
            <div className="snake-img-wrapper">
                <img
                    src={space1}
                    alt=" "
                />
            </div>
            <div className="rainbow-img-wrapper">
                <img
                    src={space2}
                    alt=" "
                />
            </div>
        </>
    )
}

export default AnimatedBorders
