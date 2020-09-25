import React from 'react'
import './ReleaseBlock.scss'

const ReleaseBlock = (props) => {
    return (
        <div className='release-block'>
            <h2>{props.name}</h2>
            <h1>Versie: {props.name}</h1>
            <ul>
                <li>#441 Fix iets</li>
                <li>#441 Fix iets</li>
                <li>#441 Fix iets</li>
                <li>#441 Fix iets</li>
            </ul>
        </div>
    )
}

export default ReleaseBlock