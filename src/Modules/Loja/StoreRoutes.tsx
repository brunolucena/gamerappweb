import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Components/Header';
import Home from './Pages/Home';

function StoureRoutes() {
  return (
    <Switch>
      <Route path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}

export default StoureRoutes;
