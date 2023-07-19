import React from 'react';
import avatar from './assets/images/self-photo.png';

export default function AboutMe() {
    return (
        <div className='about-me'>
            <img src={avatar} alt='Photo of Ash Reid' />
            <h2>About Ash</h2>
            <p>
                I currently work as QA at BILL. I am seeking to strengthen my options for career growth by attending The
                Coding Bootcamp at The University of Utah. I have a husband and two crazy boys whom I adore. In my spare
                time, I enjoy sewing and watching TV.
            </p>
        </div>
    );
}