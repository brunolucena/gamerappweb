import CreateAccount01 from './Components/CreateAccount/CreateAccount01';
import GlobalStyles from './Styles/GlobalStyles';
import Login from './Components/Login';
import OnboardingHome from './Components/OnboardingHome';
import PasswordRecovery01 from './Components/PasswordRecovery/PasswordRecovery01';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { theme } from './Styles/MaterialTheme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Switch>
          <Route path='/esqueci-senha'>
            <PasswordRecovery01 />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/criar-conta'>
            <CreateAccount01 />
          </Route>

          <Route path='/'>{isLoggedIn ? <div>logado</div> : <OnboardingHome />}</Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
