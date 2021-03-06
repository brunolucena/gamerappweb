import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import Products from 'modules/Loja/Pages/Products';
import { END } from 'redux-saga';
import { event } from 'lib/gtag';
import { logEvent } from 'lib/Firebase';
import { search } from 'modules/Loja/Store/Search';
import { SITE_TITLE } from 'lib/configs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTypedSelector, wrapper } from 'store/redux/store';

export default function Pesquisar() {
  const { count, items } = useTypedSelector(state => state.search);
  const router = useRouter();
  const { search } = router.query

  useEffect(() => {
    if (search && typeof search === 'string') {
      event({
        action: 'search',
        category: 'engagement',
        label: search,
      });
      logEvent('search', { search_term: search });
    }
  }, [search]);

  return (
    <Layout>
      <Head>
        <title>Pesquisar - {SITE_TITLE}</title>
      </Head>

      <Products count={count} items={items} title={typeof search === 'string' ? search : 'Pesquisar'} />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ query, store }) => {
  if (query.search && typeof query.search === 'string') {
    store.dispatch(search({ searchText: query.search }));
    store.dispatch(END);
    // @ts-ignore
    await store.sagaTask.toPromise();

    return;
  }

  return {
    notFound: true,
  }
})
