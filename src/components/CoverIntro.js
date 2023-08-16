import React from "react";
import "../styles/CoverIntro.css";

const CoverIntro = ({props}) => {
    return(
        <div className="intro-container" >
            <img src={props.image} className="bg-image"/>
            <p className="main-text">{props.text}</p>
            <div className="overlay">
                <h1 className="bar-text">{props.title}</h1>
            </div>
        </div>
    );
}

export default CoverIntro;