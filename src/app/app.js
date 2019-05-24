import React from 'react';
import Routes from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import resumeReducer from './store/reducers';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const store = createStore(resumeReducer);

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {  
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
