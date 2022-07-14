import React from 'react'

import space1 from '@assets/space1.jpg'
import space2 from '@assets/space2.webp'
import space3 from '@assets/space3.jpeg'

import './styles.scss'

const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            <img src={space1} alt=" "/>
            <img src={space2} alt=" "/>
            <img src={space3} alt=" "/>
        </div>
    )
}

export default Gallery
