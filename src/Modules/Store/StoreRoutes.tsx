import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function StoureRoutes() {
  return (
    <Switch>
      <Route path='/product/:id'>
        <ProductDetails />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default StoureRoutes;
