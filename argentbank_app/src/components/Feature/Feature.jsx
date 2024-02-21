import React from 'react';

function Feature(props) {
    const { imageSource, title, description, alt } = props;

    return (
        <div className="feature-item">
            <img src={imageSource} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )                    
}

export default Feature;