import React from 'react';
import myResume from '../../assets/Charles Dawkins Resume May 2021.docx';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume() {
    return (
        <section className="info-header">
            <div className="card">
                <div className="card-header">
                    <h2>Resume</h2>
                </div>
                <div className="card-body">
                    <a href={myResume} target="_blank" rel="noreferrer" download>
                        <button className="btn"><FontAwesomeIcon icon={faDownload} size="1x" /> Download Resume</button>
                    </a>
                </div>
            </div>
            
        </section>
    );
}

export default Resume;