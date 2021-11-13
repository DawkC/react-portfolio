import React from 'react';

import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/DawkC"><span><FontAwesomeIcon icon={faGithub} size="2x" /></span></a>
            <a href="https://www.linkedin.com/in/charles-dawkins-7882ab211/"><span><FontAwesomeIcon icon={faLinkedin} size="2x" /></span></a>
            <a href="https://www.facebook.com/charles.dawkins.71/"><span><FontAwesomeIcon icon={faFacebook} size="2x" /></span></a>
        </footer>
    );
}

export default Footer;