import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <a className="mailbox" href="/">
            <i className="fas fa-envelope"></i>
            <span>AVAILABLE FOR FREELANCE</span>
          </a>
          <div className="icons">
            <a className="icons__search" href="/">
              <i className="fas fa-search"></i>
            </a>
            <a className="icons__download" href="/">
              <i className="fas fa-download"></i>
            </a>
            <a className="icons__ellipsis" href="/">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </div>
        </div>
        <div className="header-bottom">
          <div className="logo">
            SILITY
          </div>
          <div className="navbar">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/">ABOUT</a></li>
              <li><a href="/">SKILL</a></li>
              <li><a href="/">EXPERIENCE</a></li>
              <li><a href="/">EDUCATION</a></li>
              <li><a href="/">WORK</a></li>
              <li><a href="/">BLOG</a></li>
              <li><a href="/">CONTACT</a></li>
            </ul>
          </div>
          <a className="burger" href="/">
            Menu
            <i className="fa fa-bars"></i>
          </a>
          <div className="btn-plus">
            +
          </div>
        </div>
      </header>
    );
  }
}
