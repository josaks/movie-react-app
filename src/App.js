import React, { Component } from 'react';
import './App.css';
import Maincontainer from './components/maincontainer';


/*
  Renders the app
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Maincontainer />
      </div>
    );
  }
}

export default App;
