// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide} from 'react-awesome-reveal'

import Introduction from '@pages/Home/Introduction'

import { ReactComponent as GithubIcon } from '@assets/github-small-icon.svg'
import { ReactComponent as LinkedInIcon } from '@assets/linkedin-small-icon.svg'
import { ReactComponent as TelegramIcon } from '@assets/telegram-small-icon.svg'

import './styles.scss'
import Microservice from '@pages/Home/Microservice'

const Home = () => {
    return (
        <div className="homepage">
            <div className="homepage__icons-handler">
                <Roll delay={500} cascade triggerOnce >
                    <a href="https://github.com">
                        <GithubIcon fill="white" />
                    </a>

                    <a href="https://linkedin.com">
                        <LinkedInIcon fill="#0366c3" />
                    </a>

                    <a href="https://telegram.com">
                        <TelegramIcon fill="#2AABEE" />
                    </a>
                </Roll>
            </div>

            <Introduction />
            <Microservice />
        </div>
    )
}

export default Home
