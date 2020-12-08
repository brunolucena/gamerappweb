import CreateAccountNavigation from 'Pages/CreateAccount/CreateAccountNavigation';
import Login from 'Pages/Login';
import PasswordRecovery01 from 'Pages/PasswordRecovery/PasswordRecovery01';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function AccountRoutes() {
  // TODO: arrumar rotas principais
  return (
    <Switch>
      <Route path='/account/login'>
        <Login />
      </Route>

      <Route path='/account/signup'>
        <CreateAccountNavigation />
      </Route>

      <Route path='/account/forgot-password'>
        <PasswordRecovery01 />
      </Route>
    </Switch>
  );
}

export default AccountRoutes;
