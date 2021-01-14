import Home from 'modules/Loja/Pages/Home';
import Layout from 'modules/Loja/Components/Layout';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { END } from 'redux-saga';
import { loadConfiguration } from 'modules/Loja/Lib/Configuration';
import { loadSession } from 'modules/Loja/Store/Session';
import { wrapper } from 'store/redux/store';
import { loadBanners } from 'modules/Loja/Store/Banner';

interface Props {
  sessions: ConfigurationModel[];
}

export default function HomePage({ sessions }: Props) {
  return (
    <Layout>
      <Home sessions={sessions} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { success, data } = await loadConfiguration();

  if (success && data.sessions?.length > 0) {
    data.sessions.forEach(({ id, type }) => {
      if (type === 'Banner') {
        store.dispatch(loadBanners({ sessionId: id }));
      } else if (type === 'Game') {
        store.dispatch(loadSession({ sessionId: id, quantity: 20 }));
      }
    });
  }

  store.dispatch(END);
  // @ts-ignore
  await store.sagaTask.toPromise();

  return {
    props: {
      sessions: data.sessions,
    },
  };
});
