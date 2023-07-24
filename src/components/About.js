import React from 'react';
import selfImg from './assets/images/self-photo.png';

// Constructs the "About Me" page
export default function AboutMe() {
    return (
        <div className='about-me'>
            <section className='main-container about-container'>
                <div className='self-image'>
                    <img src={selfImg} alt='Ash Reid' />
                </div>
                <p className='about-description'>
                    I currently work as QA at BILL. I am seeking to strengthen my options for career growth by attending The
                    Coding Bootcamp at The University of Utah. I have a husband and two crazy boys whom I adore. In my spare
                    time, I enjoy sewing and watching TV.
                </p>
            </section>
        </div>
    );
}