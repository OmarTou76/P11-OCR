import React from 'react'
import { Link } from 'react-router-dom'
import './thumb.css'

export const Thumb = ({ picture, title, logementId }) => {
    return (
        <Link to={`/logement/${logementId}`} className='Thumb'>
            <img className='Thumb__cover' src={picture} alt={title} />
            <div className='Thumb__title'>
                <p>{title}</p>
            </div>
        </Link>
    )
}
