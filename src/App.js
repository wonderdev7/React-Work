import React from 'react';
import Header from './Header'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "MyTitle",
      count: 0
    }
  };
 
  onClick = () => {
    const { count } = this.state;
    this.setState({
      title: "MyTitle" + count,
      count: count + 1
    })
  };

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <Header title={title}/>
        <button onClick={() => this.onClick()}>Click Here</button>
      </div>
    );
  };
};

export default App;
