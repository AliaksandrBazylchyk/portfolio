import React from 'react'

import BackgroundSpaceLoop from '@assets/introduction-space-loop.mp4'

import './styles.scss'

const Introduction: React.FC = () => {
    return (
        <div className="introduction">
            <video
                loop
                autoPlay
                muted
                className="introduction__background-video"
            >
                <source src={BackgroundSpaceLoop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="introduction__description-handler">
                <span className="introduction-header">
                    Thats my f*cking best site
                </span>
                <div className="introduction-description">
                    <span className="introduction-description-text">
                        This portfolio-site show my skills in front-end
                        development. You can also learn about my projects on
                        other languages here. I have non-commercial experience
                        with .NET. (Scroll)
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Introduction
