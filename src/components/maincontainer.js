import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import MovieDetails from './moviedetails';
import LoggedInName from './loggedinname';

export default () => (
  <div>
    <header className="App-header">
    <a href="/">
      <h1 className="App-title">Movie react app</h1>
    </a>
    <LoggedInName />
    </header>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movie/:number' component={MovieDetails} />
    </Switch>
  </div>
);
