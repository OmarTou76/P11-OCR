import React from 'react'
import './userCard.css'

export const UserCard = ({ name, picture }) => {
    const [firstName, lastName] = name.split(' ')
    return (
        <div className='UserCard'>
            <div className="UserCard__name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <img src={picture} alt={name} />
        </div>
    )
}