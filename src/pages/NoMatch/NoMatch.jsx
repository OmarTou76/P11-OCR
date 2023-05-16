import React from 'react'
import './noMatch.css'

export const NoMatch = () => {
    return (
        <div className="NoMatch">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="/">Retourner sur la page d'acceuil</a>
        </div>
    )
}
