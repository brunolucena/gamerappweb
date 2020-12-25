import AccountRoutes from 'Modules/Account/AccountRoutes';
import CommunityNavigation from './Pages/Community/CommunityNavigation';
import React from 'react';
import StoureRoutes from 'Modules/Loja/StoreRoutes';
// @ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router-dom';

function AppRoutes() {
  // TODO: arrumar rotas principais
  return (
    <AnimatedSwitch atActive={{ opacity: 1 }} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} className='switch-wrapper'>
      <Route path='/account'>
        <AccountRoutes />
      </Route>

      <Route path='/community'>
        <CommunityNavigation />
      </Route>

      <Route path='/'>
        <StoureRoutes />
      </Route>
    </AnimatedSwitch>
  );
}

export default AppRoutes;
