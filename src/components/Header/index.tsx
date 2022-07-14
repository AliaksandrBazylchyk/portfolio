import React from 'react'

import './styles.scss'
// import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header__text-handler">
                {/*<Link to={'/'}>*/}
                {/*    <span className="header__text-handler__text">Home</span>*/}
                {/*</Link>*/}
            </div>
            <div className="header__button-handler">
                {/*<button>skills-page</button>*/}
            </div>
        </div>
    )
}

export default Header
