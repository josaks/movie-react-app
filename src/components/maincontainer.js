import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import MovieDetails from './moviedetails';
import Header from './header';


/*
  A container for the application. Handles routing between homepage and
  details page.
*/
export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movie/:number' component={MovieDetails} />
    </Switch>
  </div>
);
