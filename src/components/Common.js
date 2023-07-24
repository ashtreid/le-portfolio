import React from 'react';
import gitHubImg from './assets/images/socials/github-mark-white.png';
import linkedInImg from './assets/images/socials/In-White-96.png';

// Constructs the navigation portion on the top of each page
function TopNav({ page, pageContentHandler }) {
    
    // Creates an extra className `active` to change color in App.css when link is clicked.
    const linkState = (pageName) => {
        return page === pageName ? 'tabs active' : 'tabs'
    };

    return (
        <ul className={'tabs'}>
            <li className='tab-items'>
                <a
                    href="#about"
                    onClick={() => pageContentHandler('About Me')}
                    className={linkState('About Me')}
                >About me
                </a>
            </li>
            <li className='tab-items'>
                <a
                    href="#portfolio"
                    onClick={() => pageContentHandler('Portfolio')}
                    className={linkState('Portfolio')}
                >Portfolio
                </a>
            </li>
            <li className='tab-items'>
                <a
                    href="#contact"
                    onClick={() => pageContentHandler('Contact')}
                    className={linkState('Contact')}
                >Contact
                </a>
            </li>
            <li className='tab-items'>
                <a
                    href="#resume"
                    onClick={() => pageContentHandler('Resume')}
                    className={linkState('Resume')}
                >Resume
                </a>
            </li>
        </ul>

    );
};

// Constructs simple header portion at the top of each page 
function Header() {
    return (
        <h1>Ash Reid</h1>
    );
};

// Constructs the footer portion at the bottom of each page.
// Uses logo images as links
function Footer() {
    return (
        <section className="footer-items">
            <div className='footer-links'>
                <a href="https://github.com/ashtreid" target='_blank' rel='noopener noreferrer'>
                    <img src={gitHubImg} alt='GitHub link' width='50' height='50' />
                </a>
            </div>
            <div className='footer-links'>
                <a href="https://www.linkedin.com/in/ash-t-reid/" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedInImg} alt='LinkedIn link' width='50' height='50' />

                </a>
            </div>
        </section>
    );
};

export { TopNav, Header, Footer };