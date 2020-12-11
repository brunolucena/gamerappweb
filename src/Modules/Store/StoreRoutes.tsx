import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

function StoureRoutes() {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default StoureRoutes;
