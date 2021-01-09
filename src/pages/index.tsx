import Layout, { siteTitle } from 'components/Layout';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from 'lib/posts';
import { loadConfiguration } from 'lib/configurations';
import Date from 'components/Date';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from 'styles/utils.module.scss';

export interface ConfigurationModel {
  title: string;
  id: string;
  type: string;
  count: number;
}

export interface Post {
  id: string;
  date: string;
  title: string;
  [key: string]: any;
}

interface Props {
  allPostsData: Array<Post>;
  feedSessions: ConfigurationModel[];
}

export default function Home({ allPostsData, feedSessions }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Feed Sessions</h2>
        <ul className={utilStyles.list}>
          {feedSessions.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const feedSessions = await loadConfiguration();

  return {
    props: {
      allPostsData,
      feedSessions,
    },
  }
}
