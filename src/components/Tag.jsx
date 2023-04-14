import React from 'react'
import './styles/components.css'

export const Tag = ({ props }) => {
    return (
        <div className='Tag'>
            {props.name}
        </div>
    )
}