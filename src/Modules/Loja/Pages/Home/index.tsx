import Container from 'Components/Container';
import ContentSlider from 'Components/ContentSlider';
import React, { useEffect } from 'react';
import SectionStore from 'Components/SectionStore';
import { loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import { loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { ReduxStore } from 'Store/Redux';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { feedSessions } = useSelector((state: ReduxStore) => state.storeConfiguration);

  useEffect(() => {
    dispatch(loadBannersClear());
    dispatch(loadSessionClear());
    dispatch(loadConfiguration());
  }, [dispatch]);

  return (
    <div className='home-container'>
      <Container>
        <div className='home-content'>
          {feedSessions?.map((session: any) => (
            <>
              {session.type === 'Banner' && <ContentSlider sessionId={session.id} itemsOnScreen={1} />}
              {session.type === 'Game' && <SectionStore sessionId={session.id} title={session.title} />}
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
