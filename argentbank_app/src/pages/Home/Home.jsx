import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import Feature from '../../components/Feature/Feature.jsx';
import featuresData from '../../assets/data/featuresData.js';

import './home.scss';

function Home() {
    return ( 
        <main>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.map(feature => (
                    <Feature 
                        key={feature.index}
                        imageSource={feature.src}
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
