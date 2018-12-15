import React, { Component } from 'react';
import Header from './header';
import Container from './container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Container></Container>
      </div>
    );
  }
}

export default App;
