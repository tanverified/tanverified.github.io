import React from 'react'
import './styles/Skillcard.scss'

function SkillCard({imgUrl,name}) {
    return (
        <div className='card'>
            <img src={imgUrl} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default SkillCard
