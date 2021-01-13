import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import { SITE_TITLE } from 'lib/configs';

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
