import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
