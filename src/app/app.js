import React from 'react';
import Routes from './router';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {  
    return (
      <div>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
