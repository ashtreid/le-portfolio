import React from 'react';
import resumePDF from './assets/documents/ash-reid-resume.pdf'

// Constructs the "Resume" page with a downloadable link
export default function Resume() {
    return (
        <div>

            <section className='main-container resume-container'>
                <p>
                    <strong>Front-end Proficiencies</strong>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML/ CSS</li>
                        <li>jQuery</li>
                        <li>Responsive design</li>
                    </ul>
                </p>

                <p>
                    <strong>Back-end Proficiencies</strong>
                    <ul>
                        <li>MySQL</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                    </ul>
                </p>
                <div >
                    <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='download-link'>
                        Download my full resume
                    </a>
                </div>
            </section>
        </div>
    );
}