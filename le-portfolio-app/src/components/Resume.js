import React from 'react';
import resumePDF from './assets/documents/resume-sample.pdf'

export default function Resume() {
    return (
        <div>

            <section className='main-container resume-container'>
                <h3>Summary</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
                    arcu a nibh fermentum, a rhoncus nisi lacinia. Phasellus euismod erat ut
                    est vehicula, ac gravida sem tincidunt. Sed tincidunt orci eget risus
                    faucibus commodo.
                </p>

                <h3>Education</h3>
                <p>
                    <strong>Bachelor of Science Fiction</strong> - Computer Science Fiction
                    <br />
                    University of Lorem Ipsum
                    <br />
                    Graduation Year: 2022
                </p>

                <h3>Experience</h3>
                <p>
                    <strong>Software Developer</strong>
                    <br />
                    ABC Company
                    <br />
                    2019 - Present
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    - Nunc fermentum felis vel lacinia fermentum.
                    <br />
                    - In hac habitasse platea dictumst. Ut semper eleifend nisi non mollis.
                </p>
                <div >
                    <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='download-link'>
                        Download my resume
                    </a>
                </div>
            </section>
        </div>
    );
}