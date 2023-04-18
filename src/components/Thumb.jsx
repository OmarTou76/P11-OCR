import React from 'react'

export const Thumb = ({ picture, title, logementId }) => {
    return (
        <a href={`/logement/${logementId}`} className='Thumb'>
            <img className='Thumb__cover' src={picture} alt={title} />
            <div className='Thumb__title'>
                <p>{title}</p>
            </div>
        </a>
    )
}
