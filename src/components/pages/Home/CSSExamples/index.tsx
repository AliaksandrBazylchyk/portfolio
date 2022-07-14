import React from 'react'

import Gallery from '@pages/Home/CSSExamples/Gallery'
import AnimatedBorders from '@pages/Home/CSSExamples/AnimatedBorders'
import Bars from '@pages/Home/CSSExamples/Bars'
import Buttons from '@pages/Home/CSSExamples/Buttons'
import Cards from "@pages/Home/CSSExamples/Cards";

import './styles.scss'

const CSSExamples: React.FC = () => {
    return (
        <div className="css-examples">
            <span className="css-examples__header">My Skills</span>
            <div className="css-examples__handler">
                <Gallery />
            </div>
            <div className="css-examples__divider" />
            <div className="css-examples__handler">
                <AnimatedBorders />
            </div>
            <div className="css-examples__divider" />
            <div className="css-examples__handler">
                <Bars />
            </div>
            <div className="css-examples__divider" />
            <div className="css-examples__handler">
                <Buttons />
            </div>
            <div className="css-examples__divider" />
            <div className="css-examples__handler">
                <Cards />
            </div>
        </div>
    )
}

export default CSSExamples
