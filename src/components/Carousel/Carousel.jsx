import React, { useState } from 'react'
import './carousel.css'

export const Carousel = ({ title, pictures }) => {

    const [carouselPosition, setCarouselPosition] = useState(0)
    /**
     * Update carousel position 
     * @param {*} direction next direction (previous or next)
     */
    const handleCarousel = (direction) => {
        let nextDirection
        if (direction === "prev") {
            if (carouselPosition === 0) {
                nextDirection = (pictures.length - 1) * 100 // Retourne a la derniere photo du carousel
            } else {
                nextDirection = carouselPosition - 100 // Précedent
            }
        } else if (direction === "next") {
            if (carouselPosition === (pictures.length - 1) * 100) {
                nextDirection = 0                   // Retourn a la premiere position
            } else {
                nextDirection = carouselPosition + 100 // Suivant
            }
        }
        setCarouselPosition(nextDirection)
    }



    return (
        <div className='Carousel'>
            {pictures.length > 1 && (
                <>
                    <i className="fas fa-chevron-left Carousel__nav" onClick={() => handleCarousel("prev")}></i>
                    <i onClick={() => handleCarousel("next")} className="fas fa-chevron-right Carousel__nav Carousel__nav__next"></i>
                    <span className='Carousel__pagination'>{(carouselPosition / 100) + 1}/{pictures.length}</span>
                </>
            )}
            <div className='Carousel__pictures' style={{
                transform: `translateX(-${carouselPosition}%)`
            }}>
                {pictures.map((picture, id) => (
                    <img key={id} src={picture} alt={title} />
                ))}
            </div>
        </div>
    )
}