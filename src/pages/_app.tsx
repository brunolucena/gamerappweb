import * as gtag from 'lib/gtag';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'styles/MaterialTheme';
import { ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'react-redux';
import { wrapper } from 'store/redux/store';
import 'styles/content-slider.scss';
import 'styles/globals.scss';
import 'styles/header.scss';
import 'components/Styles/index.scss';
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

  return (
    <PersistGate persistor={(store as any).__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
