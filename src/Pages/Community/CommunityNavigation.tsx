import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChoosePlatform from './ChoosePlatform';
import Welcome from './Welcome';

function CommunityNavigation() {
  return (
    <Switch>
      <Route path='/community/chooseplatform'>
        <ChoosePlatform />
      </Route>
      <Route path='/community/welcome'>
        <Welcome />
      </Route>
    </Switch>
  );
}
export default CommunityNavigation;
