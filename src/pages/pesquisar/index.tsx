import Head from 'next/head';
import HomeLoja from 'modules/Loja/Pages/Home';
import Layout from 'modules/Loja/Components/Layout';
import { SITE_TITLE } from 'lib/configs';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
// import { GetStaticProps } from 'next';
// import { loadConfiguration, loadMenuConfiguration } from 'modules/Loja/Lib/Configuration';

interface Props {
  menuSessions: ConfigurationModel[];
  sessions: ConfigurationModel[];
}

export default function Pesquisar({ menuSessions, sessions }: Props) {
  return (
    <Layout menuSessions={menuSessions}>
      <Head>
        <title>Pesquisar - {SITE_TITLE}</title>
      </Head>

      Pesquisar
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const request = await loadConfiguration();
//   const requestMenu = await loadMenuConfiguration();

//   if (!request.success) {
//     return {
//       notFound: true,
//       props: {},
//     }
//   }

//   return {
//     props: {
//       menuSessions: requestMenu.data.sessions,
//       sessions: request.data.sessions,
//     },
//     revalidate: 1,
//   }
// }
