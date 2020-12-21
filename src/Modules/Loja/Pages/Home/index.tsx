import Container from 'Components/Container';
import ContentSlider from 'Components/ContentSlider';
import { loadConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import { loadBanners, loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import CardStore from 'Components/CardStore';
import SectionStore from 'Components/SectionStore';
import './styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { feedSessions } = useSelector((state: ReduxStore) => state.storeConfiguration);

  useEffect(() => {
    dispatch(loadBannersClear())
    dispatch(loadSessionClear())
    dispatch(loadConfiguration());
  }, []);

  return (
    <div className='home-container'>
      <Container>
        {
          feedSessions?.map((session: any) => <>
            {session.type == 'Banner' && <ContentSlider sessionId={session.id} itemsOnScreen={1}/>}
            {session.type == 'Game' && <SectionStore sessionId={session.id} title={session.title}/>}
          </>
          )
        }
      </Container>
    </div>
  );
};

export default Home;
