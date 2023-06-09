import React from 'react'
import { Thumb } from "../../components/Thumb/Thumb";
import { data } from "../../data";
import { PictureLayout } from '../../components/PictureLayout/PictureLayout';
import homeBG from '../../assets/homeBG.png'
import './homepage.css';

export const Homepage = () => {
    return (
        <>
            <PictureLayout additionalStyle="PictureLayoutHome" picture={homeBG} text='Chez vous, partout et ailleurs' />
            <div className="thumb_container">
                {data.map((element, id) => <Thumb picture={element.cover} title={element.title} logementId={element.id} key={`${element.title}-${id}`} />)}
            </div>
        </>
    )
}
