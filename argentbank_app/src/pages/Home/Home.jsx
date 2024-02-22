import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import Feature from '../../components/Feature/Feature.jsx';
import featuresData from '../../assets/data/features.json';

import './home.scss';

function Home() {
    const imageBaseUrl = '../../assets/img/'; // Modifier le chemin d'accès à votre répertoire d'images

    return ( 
        <main>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.features.map( feature => (
                    <Feature 
                    key={feature.index}
                    imageSource={`${imageBaseUrl}${feature.src}`} // Utiliser l'URL directe vers les images
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
