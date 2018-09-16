import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a href="/">
          <h1 className="App-title">Movie react app</h1>
        </a>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
