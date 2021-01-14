import Head from 'next/head';
import Home from 'modules/Loja/Pages/Home';
import Layout from 'modules/Loja/Components/Layout';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { END } from 'redux-saga';
import { SITE_TITLE } from 'lib/configs';
import { loadConfiguration } from 'modules/Loja/Lib/Configuration';
import { loadMenuConfiguration } from 'modules/Loja/Store/Configuration';
import { loadSession } from 'modules/Loja/Store/Session';
import { wrapper } from 'store/redux/store';
import { loadBanners } from 'modules/Loja/Store/Banner';

interface Props {
  sessions: ConfigurationModel[];
}

export default function HomePage({ sessions }: Props) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta key="og-title" property="og:title" content="GamerApp - Comunidade e Loja de Jogos Digitais" />
        <meta
          key="og-description"
          property="og:description"
          content="GamerApp é uma comunidade e loja de jogos digitais. Encontre amigos, veja conteúdo, troque informações, compre seus jogos preferidos e muito mais."
        />
        <meta key="og-image" property="og:image" content="https://www.gamerapp.com.br/images/seo/media-gamerapp.png" />
      </Head>

      <Home sessions={sessions} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(loadMenuConfiguration());

  const { success, data } = await loadConfiguration();

  if (success && data.sessions?.length > 0) {
    data.sessions.forEach(({ id, type }) => {
      if (type === 'Banner') {
        store.dispatch(loadBanners({ sessionId: id }));
      } else if (type === 'Game') {
        store.dispatch(loadSession({ sessionId: id, quantity: 20 }));
      }
    });
  }

  store.dispatch(END);
  // @ts-ignore
  await store.sagaTask.toPromise();

  return {
    props: {
      sessions: data.sessions,
    },
  };
});
