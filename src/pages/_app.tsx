import * as gtag from 'lib/gtag';
import { AppProps } from 'next/app';
import { theme } from 'styles/MaterialTheme';
import { ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'styles/globals.scss';
import 'components/Styles/index.scss';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default App;
