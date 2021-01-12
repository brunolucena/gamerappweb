import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import { SITE_TITLE } from 'lib/configs';
// import { GetStaticProps } from 'next';
// import { loadConfiguration, loadMenuConfiguration } from 'modules/Loja/Lib/Configuration';

export default function Pesquisar() {
  return (
    <Layout>
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
