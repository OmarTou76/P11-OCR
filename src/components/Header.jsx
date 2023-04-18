import React from 'react'
import logo from '../assets/logo.png'

export const Header = () => {

    const { pathname } = window.location

    const currentPage = pathname.split('/')[1]

    return (
        <div className="Header container">
            <a href='/' className="Header__logo">
                <img src={logo} alt='Kasa Logo' />
            </a>
            <nav className='Header__nav'>
                <a href="/" className={!currentPage ? "isActive" : ""}>Acceuil</a>
                <a href="/about" className={currentPage === 'about' ? "isActive" : ""}
                >A Propos</a>
            </nav>
        </div>
    )
}
