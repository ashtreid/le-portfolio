import React from 'react';

function TopNav({ page, pageContentHandler }) {
    const linkState = (pageName) => {
        return page === pageName ? 'nav-link active' : 'nav-link'
    };

    return (
        <ul className='tabs'>
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

function Header() {
    return (<h1>Ash Reid</h1>);
};

function Footer() {
    return (
        <section className="footer-items">
            <div className='footer-links'>
                <a href="https://github.com/ashtreid" target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>
            <div className='footer-links'>
                <a href="https://www.linkedin.com/in/ash-t-reid/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            </div>
        </section>
    );
};

export { TopNav, Header, Footer };