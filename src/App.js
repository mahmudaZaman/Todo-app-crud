import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <List></List>
        </div>
      </div>
    );
  }
}

export default App;
