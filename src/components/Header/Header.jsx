import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import './header.css'

export const Header = () => {

    const { pathname } = useLocation()

    const currentPage = pathname.split('/')[1]

    return (
        <div className="Header container">
            <Link to='/' className="Header__logo">
                <img src={logo} alt='Kasa Logo' />
            </Link>
            <nav className='Header__nav'>
                <Link to="/" className={!currentPage ? "isActive" : ""}>Acceuil</Link>
                <Link to="/about" className={currentPage === 'about' ? "isActive" : ""}
                >A Propos</Link>
            </nav>
        </div>
    )
}
