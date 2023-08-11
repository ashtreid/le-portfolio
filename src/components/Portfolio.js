import React from 'react';
import horiseonImg from './assets/images/horiseon-sample.png';
import flickImg from './assets/images/flick-logo.png';
import flexImg from './assets/images/flexcellentLogo.png';
import ghostBusters from './assets/images/ghostBusters.png';
import img2 from './assets/images/placeholder-2.png';
import img3 from './assets/images/placeholder-3.png';
import img4 from './assets/images/placeholder-4.png';

// Images, titles, and links for the portfolio page
const galleryData = [
    {
        title: 'Horiseon SEO | HTML, CSS',
        deployedLink: 'https://ashtreid.github.io/module-1-challenge/',
        gitHubLink: 'https://github.com/ashtreid/module-1-challenge',
        image: horiseonImg,
    },
    {
        title: 'Where the FLICK is it? | Pico CSS, JavaScript',
        deployedLink: 'https://ashtreid.github.io/where-the-flick/',
        gitHubLink: 'https://github.com/ashtreid/where-the-flick',
        image: flickImg,
    },
    {
        title: 'Flexcellent | Handlebars, Express JS, MySQL, Sequelize',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: flexImg,
    },
    {
        title: 'Ghostbusters | React, React-Leaflet, GraphQL, MongoDB',
        deployedLink: 'https://triskaidekaphobia-48aedc7fe5ca.herokuapp.com/',
        gitHubLink: 'https://github.com/ashtreid/ghostbusters',
        image: ghostBusters,
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: img3,
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: img4,
    }
];

// Constructs the "Portfolio" page
export default function Portfolio() {
    return (
        <div className='portfolio-gallery'>
            {galleryData.map((app, index) => (
                <div className='gallery-item main-container' key={index}>
                    <div className='gallery-headers'>
                        <h3 className='gallery-titles'>{app.title}</h3>
                        <div className='gallery-links'>
                            <div style={{ padding: '5px' }}>
                                <a href={app.deployedLink} target='_blank' rel='noopener noreferrer'>
                                    Deployed app
                                </a>
                            </div>
                           
                            <div style={{ padding: '5px' }}>
                                <a href={app.gitHubLink} target='_blank' rel='noopener noreferrer'>
                                    GitHub repo
                                </a>
                            </div>

                        </div>
                    </div>
                    <img src={app.image}
                        alt={app.title}
                        className={index === 0 ? 'horiseon-image' : 'gallery-images'}
                    // className='gallery-images' 
                    />
                </div>
            ))}
        </div>
    );
}