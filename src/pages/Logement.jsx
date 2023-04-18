import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'

export const Logement = () => {
    const { id } = useParams()
    const logement = data.find(element => element.id === id)
    console.log(logement)
    return (
        <div>Logement</div>
    )
}
