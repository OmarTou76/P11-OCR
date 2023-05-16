import React from 'react'
import './tag.css'

export const Tag = ({ name }) => {
    return (
        <div className='Tag'>
            {name}
        </div>
    )
}