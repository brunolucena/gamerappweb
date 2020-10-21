import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Styles/MaterialTheme';
import OnboardingHome from './Components/OnboardingHome';
import PasswordRecovery01 from './Components/PasswordRecovery/PasswordRecovery01';
import PasswordRecovery02 from './Components/PasswordRecovery/PasswordRecovery02';
import PasswordRecovery03 from './Components/PasswordRecovery/PasswordRecovery03';
import PasswordRecovery04 from './Components/PasswordRecovery/PasswordRecovery04';
import CreateAccount01 from './Components/CreateAccount/CreateAccount01';
import CreateAccount02 from './Components/CreateAccount/CreateAccount02';
import CreateAccount03 from './Components/CreateAccount/CreateAccount03';
import CreateAccount04 from './Components/CreateAccount/CreateAccount04';
import CreateAccount05 from './Components/CreateAccount/CreateAccount05';
import Login from './Components/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PasswordRecovery01 />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
