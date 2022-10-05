import React from "react";
import "../styles/propertycard.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PropertyCard = ({ title, city, type, bedrooms, bathrooms, price, email }) => {
    const sendMail = () => {
        const mailto: string =
            `mailto:${email}?subject=Request viewing of ${title}`;
        window.location.href = mailto;
    }

    return (
        <div className="property-card">
            <div className="property-title"><h3>{title}</h3></div>
            <div className="property-city">{city}</div>
            <div className="property-type">{type}</div>
            {/* <FontAwesomeIcon icon="fa-solid fa-bed" /> */}
            <div className="property-bedrooms">{bedrooms}</div>
            {/* <FontAwesomeIcon icon="fa-solid fa-bath" /> */}
            <div className="property-bathrooms">{bathrooms}</div>
            <div className="property-price">{price}</div>
            <div className="property-email">
                <button type="submit" className="property-button" onClick={sendMail}>Request Viewing</button>
            </div>
        </div >
    );
}


export default PropertyCard;