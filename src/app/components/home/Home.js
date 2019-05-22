/* eslint-disable max-len */
import React from 'react';
import './home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="section-Home" id="Home">
        <div className="col-md-7 info-section">
          <h1>Design<sup>+</sup> Develope<sup>+</sup> Interactive<sup>+</sup> Art<sup>+</sup></h1>
          <p>Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design. I am worked on a variety of brands and with agencies both big and small.</p>
          <div className="btn-container">
            <a className="btn btn__white">Hire Me Now</a>
            <a className="btn btn__purple">Download CV</a>
          </div>
        </div>
        <div className="col-md-5 img-section">
          <img src="/assets/man01.png" alt="man" className="img-section__img-responsive" />
        </div>
      </div>
    );
  }
}