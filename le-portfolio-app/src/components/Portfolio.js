import React from 'react';

const galleryData = [
    {
        title: 'Horiseon SEO | HTML, CSS',
        deployedLink: 'https://ashtreid.github.io/module-1-challenge/',
        gitHubLink: 'https://github.com/ashtreid/module-1-challenge',
        image: './assets/images/horiseon-sample.png'
    },
    {
        title: 'Where the FLICK is it? | Pico CSS, JavaScript',
        deployedLink: 'https://ashtreid.github.io/where-the-flick/',
        gitHubLink: 'https://github.com/ashtreid/where-the-flick',
        image: './assets/images/flick-logo.png',
    },
    {
        title: 'Flexcellent | Handlebars, Express JS, MySQL, Sequelize',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: './assets/images/flexcellentLogo.png',
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: './assets/images/placeholder-2.png',
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: './assets/images/placeholder-3.png',
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
        image: './assets/images/placeholder-3.png',
    }
];

export default function Portfolio() {
    return (
        <div className='portfolio-gallery'>
            <h2>Portfolio</h2>
            
            {galleryData.map((app, index) => (
                <div className='gallery-item' key={index}>
                    <img src={app.image} alt={app.title} />
                    <h3>{app.title}</h3>
                    <div className='gallery-links'>
                        <a href={app.deployedLink} target='_blank' rel='noopener noreferrer'>
                            Deployed app
                        </a>
                        <a href={app.gitHubLink} target='_blank' rel='noopener noreferrer'>
                            GitHub repo
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}