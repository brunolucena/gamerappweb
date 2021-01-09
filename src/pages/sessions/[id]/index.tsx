import { GetStaticPaths, GetStaticProps } from 'next';
import { loadSession } from 'lib/configurations';
import Head from 'next/head';
import Layout from 'components/Layout';
import utilStyles from 'styles/utils.module.scss'

interface PriceItem {
  discount: number;
  discountPercent: number;
  oldPrice: number;
  price: number;
}

interface ProductItem {
  sessionId: string;
  name: string;
  id: string;
  imageUrl: string;
  price: PriceItem;
  oldPrice?: number;
  isSteam: boolean;
  discount: number;
  isUplay: boolean;
  isOrigin: boolean;
  mac: boolean;
  windows: boolean;
  linux: boolean;
  offerValidUntil?: Date;
  url: string;
}

interface Session {
  items: ProductItem[];
  count: number;
  name: string;
}

interface Props {
  session?: Session;
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = [{
    params: {
      id: 'a256e43d-a587-4540-9053-e53f683b70ac',
    },
  }]

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const session = await loadSession({ sessionId: typeof params?.id === 'string' ? params.id : '' });

  return {
    props: {
      session,
    },
  }
}
