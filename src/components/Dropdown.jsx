import React, { useState } from 'react'

export const Dropdown = ({ props }) => {

    const [isOpen, setDropdownState] = useState(false)

    return (
        <div className='Dropdown'>
            <div className='Dropdown__title' onClick={() => setDropdownState(!isOpen)}>
                <p>
                    {props.title}
                </p>
                <i className={`fas fa-chevron-down Dropdown__chevron${isOpen ? " isOpen" : ""}`}></i>
            </div>
            <div className={`Dropdown__list ${isOpen ? " Dropdown__open" : ""}`}>
                <ul>
                    {props.list.map(element => (
                        <li>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}