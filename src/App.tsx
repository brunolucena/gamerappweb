import AppRoutes from 'AppRoutes';
import GlobalStyles from './Styles/GlobalStyles';
import mySaga from 'Store/Sagas';
import React, { useEffect, useLayoutEffect } from 'react';
import store, { sagaMiddleware } from 'Store/Redux/store';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { theme } from './Styles/MaterialTheme';
import { ThemeProvider } from '@material-ui/core';

sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

/**
 * Faz o scroll até o topo da página sempre que trocar de tela.
 * Não pode ser colocado inline junto com o <App /> porque o useLocation()
 * para de funcionar.
 */
function Wrapper({ children }: any) {
  const location = useLocation();

  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

/**
 * Componente principal.
 * Cria estrutura com:
 *
 * (ReduxSaga) - Instanciado globalmente com o sagaMiddleware.run(mySage) acima
 *
 * <Provider /> - Redux
 * <PersistGate /> - Redux Persist
 * <ThemeProvider /> - Tema do Material
 * <GlobalStyles /> - Componente pra utilizar CSS global com styled components
 * <BrowserRouter /> - Rotas com o React Router
 * <Wrapper /> - Wrapper pra fazer scroll pro topo da página durante as navegações
 * <AppRoutes /> - Arquivo com as primeiras rotas do App
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <BrowserRouter>
            <Wrapper>
              <AppRoutes />
            </Wrapper>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
