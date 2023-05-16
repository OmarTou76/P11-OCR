import React from 'react'
import logoFooter from '../../assets/logoFooter.png'
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo kasa noir et blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
