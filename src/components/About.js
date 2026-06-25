import React from "react";
import selfImg from "./assets/images/self-photo.png";

// Constructs the "About Me" page
export default function AboutMe({ page, pageContentHandler }) {

  return (
    <div className="about-me">
      <section className="main-container about-container">
        <div className="self-image">
          <img src={selfImg} alt="Ash Reid" />
        </div>
        <p className="about-description">
          I am a Senior Software Development Engineer in Test aiming to join a
          company to support their mission by enhancing quality in not only
          their product, but also in their culture. I am an experienced QA with
          8 years of automation experience behind me. I am a curious researcher
          who is always trying to improve my skills and processes. If you are
          interested in gaining a talented and self-initiating tester to your
          team, contact me in my{' '}
          <a
            href="#contact"
            onClick={() => pageContentHandler("Contact")}
            className="inline-contact-link">
            Contact
          </a>{' '}
          page.
        </p>
      </section>
    </div>
  );
}
