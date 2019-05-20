import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import About from '../About/About';
import Education from '../Education/Education';

export default class Header extends React.Component {
  render() {
    return (
      <div>
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
                <NavLink to="/" exact activeStyle={{color: 'red', fontWeight: 'bold'}}>ABOUT</NavLink>
                <NavLink to="/education" exact activeStyle={{color: 'red', fontWeight: 'bold' }}>EDUCATION</NavLink>
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
        <div className="content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/education" component={Education} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    );
  }
}
