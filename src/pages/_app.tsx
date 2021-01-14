import * as gtag from 'lib/gtag';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingScreen from 'components/LoadingScreen';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'styles/MaterialTheme';
import { ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'react-redux';
import { wrapper } from 'store/redux/store';
import 'styles/globals.scss';
import 'styles/header.scss';
import 'components/Styles/index.scss';
import 'styles/content-slider.scss';
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props extends AppProps {
  store: any;
}

function App(props: Props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const store = useStore();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      // jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const isServer = typeof window === 'undefined';

  const myApp = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );

  return isServer ? myApp : (
    <PersistGate persistor={(store as any).__persistor} loading={<LoadingScreen />}>
      {/* Precisa renderizar desse jeito se não dá um problema com o PersistGate e a tela não carrega corretamente */}
      {() => myApp}
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
