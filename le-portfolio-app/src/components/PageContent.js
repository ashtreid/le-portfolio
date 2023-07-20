import React, { useState } from 'react';
import AboutMe from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import { TopNav, Header, Footer } from './Common';

function HomeAboutPage() {
  return <AboutMe />;
}

export default function PorfolioPages() {
  const [page, setPage] = useState('About');

  const componentPageMap = {
    'About Me': <AboutMe />,
    'Portfolio': <Portfolio />,
    'Contact': <Contact />,
    'Resume': <Resume />,
  };

  const showPageContent = () => {
    return componentPageMap[page] || <HomeAboutPage />;
  };

  const pageContentHandler = (page) => setPage(page);

  return (
    <div className="container">
      <header className="header">
        <Header />
        <nav className="navbar">
          <TopNav page={page} pageContentHandler={pageContentHandler} />
        </nav>
      </header>
      <main className="content">{showPageContent()}</main>
      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}



