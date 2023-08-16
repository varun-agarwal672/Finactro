import React from "react";
import "../styles/Description.css";

const Description = ({props}) => {
    return(
        <div className="main-container">
            {props.map((prop,index) => (
                <div className="desc-container">
                {(!index%2 ? <img src={prop.image} /> : <></>)}
                <div className="description">
                    {prop.desc}
                </div>
                {(index%2 ? <img src={prop.image} /> : <></>)}
            </div>
            ))}
        </div>
    );
}

export default Description;