import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import { SITE_TITLE } from 'lib/configs';
import { useTypedSelector, wrapper } from 'store/redux/store';
import { loadSession } from 'modules/Loja/Store/Session';
import { END } from 'redux-saga';
import Products from 'modules/Loja/Pages/Products';

export default function ProductsPage() {
  const { count, items, name } = useTypedSelector(state => state.session);

  return (
    <Layout>
      <Head>
        <title>{name} - {SITE_TITLE}</title>
      </Head>

      <Products count={count} items={items} title={name} />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ params, store }) => {
  if (params?.sessionId && typeof params.sessionId === 'string') {
    store.dispatch(loadSession({ quantity: 20, sessionId: params.sessionId }));

    store.dispatch(END);
    // @ts-ignore
    await store.sagaTask.toPromise();
  }
})
