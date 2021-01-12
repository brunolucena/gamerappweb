import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import utilStyles from 'styles/utils.module.scss';
import { GetServerSideProps } from 'next';
import { loadSession } from 'modules/Loja/Lib/Session';
import { Session } from 'modules/Loja/Lib/Session/models';

interface Props {
  session: Session;
}

export default function Post({ session }: Props) {
  return (
    <Layout>
      <Head>
        <title>{session?.name}</title>
        <meta key="og-title" property="og:title" content={`Sessão ${session?.name}`} />
        <meta
          key="og-description"
          property="og:description"
          content={`Descrição da sessão ${session?.name}`}
        />
        <meta key="og-image" property="og:image" content={session?.items[0]?.imageUrl} />
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{session?.name}</h1>
      </article>

      {session?.items.map((item, index) => (
        <div className="item" key={item.id + index}>
          {item.name}
        </div>
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const request = await loadSession({ sessionId: typeof params?.id === 'string' ? params.id : '' });

  if (!request.success) {
    return {
      notFound: true,
      props: {},
    }
  }

  return {
    props: {
      session: request.data,
    },
  }
}
