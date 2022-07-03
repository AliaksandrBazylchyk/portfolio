// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

import './styles.scss'
import { Fade } from 'react-awesome-reveal'

const Microservice: React.FC = () => {
    return (
        <div className="microservice">
            <div className="microservice__description">
                <Fade cascade className="microservice__description">
                    <span className="microservice__footage-description">
                        As you can see, I really like the space theme, so my
                        site is accompanied by footage of space. If it looks
                        terrible and you cannot be on the site because of this,
                        write to me at bazylchyk.a@gmail.com. I will fix it ;)
                    </span>
                    <span className="microservice__application-description">
                        Implementation of a microservice application (online
                        store) in asp.net core using preoccupation patterns and
                        additional frameworks.
                    </span>
                </Fade>
            </div>
            <div className="microservice__introduction">aga</div>
        </div>
    )
}

export default Microservice
