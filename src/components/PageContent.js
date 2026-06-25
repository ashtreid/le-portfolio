import React, { useEffect, useState } from "react";
import AboutMe from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import { TopNav, Header, Footer } from "./Common";

export default function PortfolioPages() {
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();

    switch (hash) {
      case "#portfolio":
        return "Portfolio";
      case "#contact":
        return "Contact";
      case "#resume":
        return "Resume";
      case "#about":
      default:
        return "About Me";
    }
  };

  const [page, setPage] = useState(getPageFromHash());

  const pageContentHandler = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const componentPageMap = {
    "About Me": <AboutMe page={page} pageContentHandler={pageContentHandler} />,
    Portfolio: <Portfolio />,
    Contact: <Contact />,
    Resume: <Resume />,
  };

  const showPageContent = () => {
    return (
      componentPageMap[page] || (
        <AboutMe page={page} pageContentHandler={pageContentHandler} />
      )
    );
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
        <nav className="navbar">
          <TopNav page={page} pageContentHandler={pageContentHandler} />
        </nav>
      </header>

      <h2 className="main-page-header">{page}</h2>

      <main className="content">{showPageContent()}</main>

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}
