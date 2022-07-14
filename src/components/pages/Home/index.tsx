// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

import { Roll } from 'react-awesome-reveal'

import Introduction from '@pages/Home/Introduction'
import CSSExamples from "@pages/Home/CSSExamples";

import { ReactComponent as GithubIcon } from '@assets/github-small-icon.svg'
import { ReactComponent as LinkedInIcon } from '@assets/linkedin-small-icon.svg'
import { ReactComponent as TelegramIcon } from '@assets/telegram-small-icon.svg'

import './styles.scss'

const Home = () => {
    return (
        <div className="homepage">
            <div className="homepage__icons-handler">
                <Roll delay={500} cascade triggerOnce>
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
            <CSSExamples />
        </div>
    )
}

export default Home
