import React from 'react'
import { PictureLayout } from '../components/PictureLayout'
import homeBG from '../assets/homeBG.png'

export const AboutUs = () => {
    return (
        <div>
            <PictureLayout picture={homeBG} text='Chez vous,  partout et ailleurs' />
        </div>
    )
}
