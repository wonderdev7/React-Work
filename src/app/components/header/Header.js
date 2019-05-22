/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './header.scss';
import { withRouter } from 'react-router';

import NavLink from '../navLink';

class Header extends React.Component {

  render() {
    const { location } = this.props;
    return (
      <header className="header">
        <div className="header__title"><a href="./index.html">Sility</a></div>
        <a href="" className="header__btn-action">+</a>
        <a href="" className="header__btn-menu">Menu <i className="fa fa-bars"></i></a>
        <nav className="nav-main">
          <ul className="list-unstyled">
            <li><NavLink title="Home" selected={location.pathname === '/' } location="/" /></li>
            <li><NavLink title="About" selected={location.pathname === '/about' } location="/about" /></li>
            <li><NavLink title="Skill" selected={location.pathname === '/skill' } location="/skill" /></li>
            <li><NavLink title="Experience" selected={location.pathname === '/experience' } location="/experience" /></li>
            <li><NavLink title="Education" selected={location.pathname === '/education' } location="/education" /></li> 
            <li><NavLink title="Work" selected={location.pathname === '/work' } location="/work" /></li>
            <li><NavLink title="Blog" selected={location.pathname === '/blog' } location="/blog" /></li>
            <li><NavLink title="Contact" selected={location.pathname === '/contact' } location="/contact" /></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
