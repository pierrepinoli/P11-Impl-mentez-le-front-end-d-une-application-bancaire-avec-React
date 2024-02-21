import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import Feature from '../../components/Feature/Feature.jsx';

import jsonDataFeatures from '../../assets/data/features_data.json';

import './home.scss';

function Home() {
    const imageBaseUrl = '../../assets/img/'; 

    return ( 
        <main>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {jsonDataFeatures.features.map((feature, index) => (
                    <Feature 
                        key={index}
                        imageSource={imageBaseUrl + feature.src}
                        title={feature.title} 
                        description={feature.description}
                        alt={feature.alt}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;
