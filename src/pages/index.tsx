import Head from 'next/head';
import HomeLoja from 'modules/Loja/Pages/Home';
import Layout from 'modules/Loja/Components/Layout';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { END } from 'redux-saga';
import { loadConfiguration, loadMenuConfiguration } from 'modules/Loja/Store/Configuration';
import { SITE_TITLE } from 'lib/configs';
import { wrapper } from 'store/redux/store';

interface Props {
  sessions: ConfigurationModel[];
}

export default function Home({ sessions }: Props) {
  return (
    <Layout>
      asdasd
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

      <HomeLoja sessions={sessions} />
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().configuration.loaded) {
    store.dispatch(loadMenuConfiguration());
  }

  store.dispatch(loadConfiguration());

  store.dispatch(END);

  // @ts-ignore
  await store.sagaTask.toPromise();

  console.log({ store: store.getState().configuration.feedSessions })

  return {
    props: {},
    revalidate: 1,
  }
})
