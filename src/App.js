import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './header';
import Container from './container';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (    
      <Router>
        <div id="wrapper" className="fitvids ">
          <Header></Header>
          <Route path="/alphabet/:id" component={Container} />
          <Route path="/:page" component={Container} />
          <Route path="/" exact component={Container} />
        </div>
      </Router>
    );
  }
}

export default App;