import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/skill" component={Skills} />
        <Route path="/work" component={Work} />
      </div>
    );
  }
}

export default Routes;
