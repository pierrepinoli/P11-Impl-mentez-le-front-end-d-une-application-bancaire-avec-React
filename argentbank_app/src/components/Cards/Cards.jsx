import React from 'react';

function Cards(props) {
    const { imageSource, title, description } = props;

    return (
        <div className="feature-item">
            <img src={imageSource} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )                    
}

export default Cards;