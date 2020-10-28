import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChoosePlatform from './ChoosePlatform';
import Welcome from './Welcome';
import InterestUser from './InterestUser';

function CommunityNavigation() {
  return (
    <Switch>
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
