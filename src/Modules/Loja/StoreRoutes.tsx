import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Components/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';

function StoureRoutes() {
  const switchRoute = () => {
    return (
      <Switch>
        <Route path='/produtos/:id' render={(props)=><Products sessionId={props}/>} />
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