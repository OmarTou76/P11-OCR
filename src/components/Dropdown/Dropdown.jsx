import React, { useState } from 'react'
import './dropdown.css'

export const Dropdown = ({ title, list }) => {

    const [isOpen, setDropdownState] = useState(false)

    return (
        <div className='Dropdown'>
            <div className='Dropdown__title' onClick={() => setDropdownState(!isOpen)}>
                <p>
                    {title}
                </p>
                <i className={`fas fa-chevron-down Dropdown__chevron${isOpen ? " isOpen" : ""}`}></i>
            </div>
            <div className={`Dropdown__list ${isOpen ? " Dropdown__open" : ""}`}>
                <ul>
                    {list.map((element, id) => (
                        <li key={`${element}-${id}`}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}