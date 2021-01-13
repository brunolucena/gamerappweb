import EmptyScreen from 'modules/Loja/Components/EmptyScreen';
import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import { SITE_TITLE } from 'lib/configs';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - {SITE_TITLE}</title>
      </Head>

      <EmptyScreen text="404 - Houston, temos um problema nessa página!" />
    </Layout>
  )
}
