import CreateAccountNavigation from './Pages/CreateAccount/CreateAccountNavigation';
import GlobalStyles from './Styles/GlobalStyles';
import Login from './Pages/Login';
import OnboardingHome from './Pages/OnboardingHome';
import PasswordRecovery01 from './Pages/PasswordRecovery/PasswordRecovery01';
import CommunityNavigation from './Pages/Community/CommunityNavigation';
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
          <Route path='/community'>
            <CommunityNavigation />
          </Route>

          <Route path='/forgot-password'>
            <PasswordRecovery01 />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <CreateAccountNavigation />
          </Route>

          <Route path='/'>{isLoggedIn ? <div>logado</div> : <OnboardingHome />}</Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
export default App;
