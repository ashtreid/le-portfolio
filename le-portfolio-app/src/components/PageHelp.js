import React, { useState } from 'react';
import AboutMe from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import {TopNav, Header, Footer} from './Common';

function ErrorPage() {
  return <h1>Woops! Can't find that page.</h1>
};

export default function PorfolioPages() {
  const [page, setPage] = useState('About');

  const componentPageMap = {
    'About Me': <AboutMe />,
    'Portfolio': <Portfolio />,
    'Contact': <Contact />,
    'Resume': <Resume />,
  };

  const showPageContent = () => {
    return componentPageMap[page] || <ErrorPage />;
  };

  const pageContentHandler = (page) => setPage(page);

  return (
    <div>
      <TopNav page={page} pageContentHandler={pageContentHandler} />
      {showPageContent()}
    </div>
  );
}



