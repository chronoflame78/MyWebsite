import React from 'react';

import './share-button.styles.scss';
//<i class="fa-brands fa-facebook"></i>
const ShareButton = () => (
    <React.Fragment>
        <div className="share">
        <span>share</span>
        <nav>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
        </nav>
        </div>
    </React.Fragment>
)

export default ShareButton;