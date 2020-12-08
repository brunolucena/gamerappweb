import CommunityNavigation from './Pages/Community/CommunityNavigation';
import OnboardingHome from './Pages/OnboardingHome';
import React from 'react';
// @ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router-dom';
import AccountRoutes from 'Modules/Account/AccountRoutes';

function AppRoutes() {
  // TODO: colocar lógica do isLoggedIn
  const isLoggedIn = false;

  // TODO: arrumar rotas principais
  return (
    <AnimatedSwitch atActive={{ opacity: 1 }} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} className='switch-wrapper'>
      <Route path='/account'>
        <AccountRoutes />
      </Route>

      <Route path='/community'>
        <CommunityNavigation />
      </Route>

      <Route path='/'>{isLoggedIn ? <div>logado</div> : <OnboardingHome />}</Route>
    </AnimatedSwitch>
  );
}

export default AppRoutes;
