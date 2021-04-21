import React from 'react';
import "./ShortDescription.css";
import my_animated_img from "../../Utilities/Images/my_animated_image.png";
const ShortDescription = () => {
    return (
        <div className="short-desc-wrapper">
            <h1>Full Stack Web Developer</h1>
            <p>I code and develop web applications and I love what I do.</p>

            <div>
                <img className="my-animated-img" src={my_animated_img} alt="my_animated"/>
            </div>
        </div>
    )
}

export default ShortDescription;