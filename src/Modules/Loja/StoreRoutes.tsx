import Header from '../../Components/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function StoureRoutes() {
  const switchRoute = () => {
    return (
      <Switch>
        <Route path='/produtos/:id' render={(props)=><Products sessionId={props}/>} />
        <Route path='/pesquisar' render={(props)=><Products searchText={props}/>} />
        <Route path='/produto/:id' render={()=><ProductDetails />} />
        <Route path='/' render={()=><Home />} />
      </Switch>
    )
  }

  return (
    <>
      <Header />
      {switchRoute()}
    </>
  );
}

export default StoureRoutes;