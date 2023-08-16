import React from "react";
import "../styles/WhyUs.css";

const WhyUs = ({props}) => {
    const {header,intro,items} = props;
    return (
        <div className="why-us">
        <h2>{header}</h2>
        <p style={{fontSize : "1.4rem"}}>{intro}</p>
        <ul>
            {items.map((item, index) => (
            <li key={index}>
                <strong>{item.key} : </strong>{item.value}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default WhyUs;
