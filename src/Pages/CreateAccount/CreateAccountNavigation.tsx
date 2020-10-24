import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount01 from './CreateAccount01';
import CreateAccount02 from './CreateAccount02';
import CreateAccount03 from './CreateAccount03';
import CreateAccount04 from './CreateAccount04';
import CreateAccount05 from './CreateAccount05';

function CreateAccountNavigation() {
  return (
    <Switch>
      <Route path='/signup/phone-number'>
        <CreateAccount02 />
      </Route>

      <Route path='/signup/email'>
        <CreateAccount03 />
      </Route>

      <Route path='/signup/password'>
        <CreateAccount04 />
      </Route>

      <Route path='/signup/finish'>
        <CreateAccount05 />
      </Route>

      <Route path='/signup'>
        <CreateAccount01 />
      </Route>
    </Switch>
  );
}
export default CreateAccountNavigation;
