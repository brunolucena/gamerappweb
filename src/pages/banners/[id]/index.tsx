import { GetStaticPaths, GetStaticProps } from 'next';
import { loadBanners } from 'lib/configurations';
import Head from 'next/head';
import Layout from 'components/Layout';
import utilStyles from 'styles/utils.module.scss'

export interface BannerModel {
  badgeText?: string;
  imageUrl: string;
  name?: string;
  offerValidUntil?: Date;
  oldPrice?: number;
  price?: number;
  sessionId: string;
  storeProductId?: string;
}

interface Props {
  banner?: BannerModel;
}

export default function Post({ banner }: Props) {
  return (
    <Layout>
      <Head>
        <title>{banner?.name}</title>
        <meta key="og-title" property="og:title" content={`Banner ${banner?.name}`} />
        <meta
          key="og-description"
          property="og:description"
          content={`Descrição do banner ${banner?.name}`}
        />
        <meta key="og-image" property="og:image" content={banner?.imageUrl} />
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{banner?.name}</h1>
      </article>

      <img alt={`Banner ${banner?.name}`} src={banner?.imageUrl} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = []

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const banner = await loadBanners({ sessionId: typeof params?.id === 'string' ? params.id : '' })

  return {
    props: {
      banner: banner.banners[0],
    },
  }
}
