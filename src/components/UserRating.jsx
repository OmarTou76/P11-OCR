import React from 'react'

export const UserRating = ({ rating }) => {
    return (
        <div className='Rating'>
            {[...Array(5)].map((_, i) => (
                <i className={`fas fa-star ${i < rating ? "Rating__star" : ""}`}></i>
            ))}
        </div>
    )
}
