import React, { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../data'
import { Carousel } from "../components/Carousel"
import { Tag } from "../components/Tag"
import './styles/logement.css';
import { UserCard } from '../components/UserCard'
import { UserRating } from '../components/UserRating'
import { Dropdown } from '../components/Dropdown'

export const Logement = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const logement = useMemo(() => data.find(logement => logement.id === id), [id])

    useEffect(() => {
        if (!logement) {
            navigate('/nomatch')
        }
    }, [logement, navigate])

    if (!logement) {
        return
    }

    return (
        <>
            <Carousel title={logement.title} pictures={logement.pictures} />
            <div className="Logement">
                <div className="Logement__info">
                    <div className='Logement__title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className="Logement__tags">
                        {logement.tags.map((tag, id) => <Tag name={tag} key={`${tag}-${id}`} />)}
                    </div>
                </div>
                <div className="Logement__user">
                    <UserCard name={logement.host.name} picture={logement.host.picture} />
                    <div className="Logement__rating">
                        <UserRating rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className="Logement__description">
                <Dropdown title="Description" list={[logement.description]} />
                <Dropdown title="Équipements" list={logement.equipments} />
            </div>
        </>
    )
}
