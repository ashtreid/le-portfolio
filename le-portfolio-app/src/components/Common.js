import React from 'react';

function Header() {
    const navPadding = { padding: '5px' };

    return (
        <section style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
            <header>
                <h1>Ash Reid</h1>
            </header>
            <nav style={{
                display: 'flex',
                fontFamily: 'helvetica',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <div style={navPadding}>
                    <a href="#">About me</a>
                </div>
                <div style={navPadding}>
                    <a href="#">Portfolio</a>
                </div>
                <div style={navPadding}>
                    <a href="#">Contact</a>
                </div>
                <div style={navPadding}>
                    <a href="#">Resume</a>
                </div>
            </nav>
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

export { Header, Footer };