import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import OnboardingHome from './Components/OnboardingHome';
import Login from './Components/Login';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Styles/MaterialTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
