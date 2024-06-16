import React from "react";

const ServicerCard = ({ servicer }) => {
    return (
        <div className="servicer_card">
            <div className="servicer_card_image">
                <img src={servicer.image} alt={servicer.name} />
            </div>
            <div className="servicer_card_info">
                <h2>{servicer.name}</h2>
                <p>{servicer.description}</p>
                <p>{servicer.location}</p>
                <p>{servicer.rating}</p>
            </div>
        </div>
    )
};

export default ServicerCard;