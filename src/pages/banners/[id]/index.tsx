import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import utilStyles from 'styles/utils.module.scss';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { loadBanners } from 'modules/Loja/Lib/Banner';

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const bannerRequest = await loadBanners({ sessionId: typeof params?.id === 'string' ? params.id : '' })

  if (!bannerRequest.success) {
    return {
      notFound: true,
      props: {},
    }
  }

  return {
    props: {
      banner: bannerRequest.data.banners[0],
    },
  }
}

export default function Post({ banner }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
