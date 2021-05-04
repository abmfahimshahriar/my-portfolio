import React from 'react';
import "./ShortDescription.css";
import my_animated_img from "../../Utilities/Images/my_animated_image.png";
import { ShortDescriptionData } from '../../data/shortDescriptionData';
import deskImg from "../../Utilities/Images/desk1.jpg";

const ShortDescription = () => {
    return (
        <div className="short-desc-wrapper">
            <h1>{ShortDescriptionData.Title}</h1>
            <p>{ShortDescriptionData.Subtitle}</p>

            <div>
                <img className="my-animated-img" src={my_animated_img} alt="my_animated"/>
            </div>

            <div className="desk-img-wrapper">
                <img className="desk-img" src={deskImg} alt="my_animated"/>
            </div>
        </div>
    )
}

export default ShortDescription;