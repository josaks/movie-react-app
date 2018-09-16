import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import MovieDetails from './moviedetails';

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movie/:number' component={MovieDetails} />
    </Switch>
  </div>
);
