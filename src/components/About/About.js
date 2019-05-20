import React from 'react';
import man01 from '../../assets/man01.png';
import man02 from '../../assets/man02.png';
import sign from '../../assets/sign.png';

export default class About extends React.Component {
  render() {
    return (
      <div className="sections">
        <div className="section-home">
          <div className="content">
            <h1>
              Design<sup>+</sup> Develop<sup>+</sup><br/>
                Interactive<sup>+</sup> Art<sup>+</sup>
            </h1>
            <p>
              Hello, I am Benjamin Thomson. I Have 8 years of experience in Web and UX design. I am worked on a variety of brands and with agencies both big and small.
            </p>
            <div className="main-btns">
              <button className="btn-hire">Hire Me Now</button>
              <button className="btn-download">Download CV</button>
            </div>
          </div>
          <div className="photo">
            <img src={man01} alt="man01" className="photo-man" />
          </div>
        </div>
        <div className="section-about">
          <div className="container">
            <h2>About Me</h2>
            <div className="row">
              <div className="col-sm-3">
                <img alt="man2" src={man02} className="section-img" />
              </div>
              <div className="col-sm-9">
                <h3 className="name">BENJAMIN THOMSON</h3>
                <h5 className="title">WEB & UX DESIGNER</h5>
                <p>
                  Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque latu dantium, totam rem aperiam, eaque ipsa quae ab illo tempor
                  dignissim at.
                </p>
                <div className="sign">
                  <img alt="signature" src={sign} className="img-sign" />
                </div>
                <ul className="info">
                  <li><b>Date Of Birth:</b> 24 Jan 1989</li>
                  <li><b>Phone:</b> 012-345-6789</li>
                  <li><b>Email:</b> Sility@example.com</li>
                  <li><b>Address:</b> 123 Sility, South Corner Street, Melborne, Australia.</li>
                  <li><b>Website:</b> http://www.example.com</li>
                </ul>
                <h3>What I'm doing</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card">
                      <i className="fas fa-tv"></i>
                      <h5>WEB & UX DESIGN</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <i className="fas fa-mobile-alt"></i>
                      <h5>APP DEVELOPMENT</h5>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <i className="fas fa-trophy"></i>
                      <h5>MARKETING</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            )
        }
}