import React from 'react'

export const Thumb = ({ props }) => {
    return (
        <div className='Thumb'>
            <img className='Thumb__cover' src={props.image} alt={props.title} />
            <div className='Thumb__title'>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
