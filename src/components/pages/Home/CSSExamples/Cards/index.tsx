import React from 'react'

import Space1 from '@assets/space1.jpg'
import Space5 from '@assets/space5.jpg'
import Space6 from '@assets/space6.webp'

import './styles.scss'

const Cards: React.FC = () => {
    return (
        <div className="cards">
            <div className="cards__card">
                <img src={Space6} alt="" />
                <span>Nebula</span>
            </div>
            <div className="cards__card">
                <img src={Space1} alt="" />
                <span>Human</span>
            </div>
            <div className="cards__dynamic-card">
                <img src={Space5} alt="" />
                <div>
                    <span>Dynamic card</span>
                    <p>
                        Change resolution for effect. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
