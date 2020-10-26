import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';

function CommunityNavigation() {
  return (
    <Switch>
      <Route path='/Community/Welcome'>
        <Welcome />
      </Route>
    </Switch>
  );
}
export default CommunityNavigation;
