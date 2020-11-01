import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChoosePlatform from './ChoosePlatform';
import Welcome from './Welcome';
import InterestUser from './InterestUser';
import Home from './Home';

function CommunityNavigation() {
  return (
    <Switch>
      <Route path='/community/home'>
        <Home />
      </Route>

      <Route path='/community/chooseplatform'>
        <ChoosePlatform />
      </Route>

      <Route path='/community/interests'>
        <InterestUser />
      </Route>

      <Route path='/community'>
        <Welcome />
      </Route>
    </Switch>
  );
}
export default CommunityNavigation;
