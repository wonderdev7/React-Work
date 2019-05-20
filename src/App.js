import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
        </Router>
      </div>
    );
  }
}

export default App;
