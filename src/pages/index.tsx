import Head from 'next/head';
import HomeLoja from 'modules/Loja/Pages/Home';
import Layout from 'modules/Loja/Components/Layout';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { GetStaticProps } from 'next';
import { loadConfiguration, loadMenuConfiguration } from 'modules/Loja/Lib/Configuration';
import { SITE_TITLE } from 'lib/configs';

interface Props {
  menuSessions: ConfigurationModel[];
  sessions: ConfigurationModel[];
}

export default function Home({ menuSessions, sessions }: Props) {
  return (
    <Layout menuSessions={menuSessions}>
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

export const getStaticProps: GetStaticProps = async () => {
  const request = await loadConfiguration();
  const requestMenu = await loadMenuConfiguration();

  if (!request.success) {
    return {
      notFound: true,
      props: {},
    }
  }

  return {
    props: {
      menuSessions: requestMenu.data.sessions,
      sessions: request.data.sessions,
    },
    revalidate: 1,
  }
}
