import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bengaluru from "../constants/bengaluru.png";
import dubai from "../constants/dubai.png";
import QRCode from 'qrcode.react';
import "../styles/Location.css";

const locations = [
    {
        image : dubai,
        city : "Dubai",
        address : "Century Tower, Downtown DIFC, Dubai",
        link : "https://goo.gl/maps/arNbVcuE7c9bRvhN8"
    },
    {
        image : bengaluru,
        city : "Bengaluru",
        address : "WeWork Prestige Cube, Site No. 26 Laskar, Hosur Rd, Bengaluru, Karnataka 560095",
        link : "https://goo.gl/maps/JmYT5zFD1bEeZ2rE6"
    }
]
const Location = () => {

    return (
        <div>
            <Navbar />
            <div className="location">
                {locations.map((location,index) => (
                    <div key={index} className="location-element">
                        <img src={location.image} alt={location.city} />
                        <h2>{location.city}</h2>
                        <div className="address-section">
                            <p>{location.address}</p>
                            <div className="qr-code">
                                <QRCode value={location.link} size={64} fgColor="#00689b" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Location;