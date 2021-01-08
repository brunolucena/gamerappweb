import Head from 'next/head';
import Layout from 'components/layout';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <Layout>
      <Head key="first-post">
        <title key="title">First Post</title>
      </Head>

      <div>
        <h1>First Post</h1>

        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  )
}
