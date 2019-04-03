import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';

class App extends Component {
  
  state = {
    count: 0
  };

  countHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <h1>{this.state.count}</h1>
        <button className="alpha btn" onClick={this.countHandler}>Click to Add One</button>
      </div>
    );
  }
}

export default App;
