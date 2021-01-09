import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from 'lib/posts';
import Date from 'components/Date';
import Head from 'next/head';
import Layout from 'components/Layout';
import { Post as PostModel } from 'pages';
import utilStyles from 'styles/utils.module.scss'

interface Props {
  postData: PostModel;
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(typeof params?.id === 'string' ? params.id : '');

  return {
    props: {
      postData,
    },
  }
}
