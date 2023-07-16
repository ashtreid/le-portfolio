import React from 'react';
import avatar from './components/assets/images/self-photo.png';

function TopNav({ page, pageContentHandler }) {
    const navPadding = { padding: '5px' };

    const linkState = (pageName) => {
        return page === pageName ? 'nav-link active' : 'nav-link'
    };

    return (
        <nav className='top-nav' style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
            <ul className='tabs' style={navPadding}>
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
        </nav>
    );
};

function Header() {
    return (
        <section style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
            <header>
                <img src={avatar} alt='Photo of Ash Reid' />

                <h1>Ash Reid</h1>
            </header>
            <TopNav />
        </section>
    );
};

function Footer() {
    const footerPadding = { padding: '5px' };

    return (
        <section style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
            <div style={footerPadding}>
                <a href="#">GitHub</a>
            </div>
            <div style={footerPadding}>
                <a href="#">LinkedIn</a>
            </div>
        </section>
    );
};

export { TopNav, Header, Footer };