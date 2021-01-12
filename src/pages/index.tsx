import Head from 'next/head';
import HomeLoja from 'modules/Loja/Pages/Home';
import Layout, { siteTitle } from 'modules/Loja/Components/Layout';
import { GetStaticProps } from 'next';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { loadConfiguration } from 'modules/Loja/Lib/Configuration';

interface Props {
  sessions: ConfigurationModel[];
}

export default function Home({ sessions }: Props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
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

  if (!request.success) {
    return {
      notFound: true,
      props: {},
    }
  }

  return {
    props: {
      sessions: request.data.sessions,
    },
    revalidate: 1,
  }
}
