import React from 'react'
import './pictureLayout.css'

export const PictureLayout = ({ picture, text = '', additionalStyle = "" }) => {
    return (
        <div className={`PictureLayout ${additionalStyle ? additionalStyle : ""}`}>
            <img src={picture} alt="A remplir" />
            <div>
                {text && (
                    <p>{text}</p>
                )}
            </div>
        </div>
    )
}
