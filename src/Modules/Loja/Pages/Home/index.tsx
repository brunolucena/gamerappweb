import Container from 'Components/Container';
import ContentSlider, { Item } from 'Components/ContentSlider';
import { loadConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import { loadBanners } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSession } from 'Modules/Loja/Store/Ducks/Session';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import CardStore from 'Components/CardStore';
import SectionStore from 'Components/SectionStore';
import moment from 'moment';
import './styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [dateHours, setDateHours] = useState();
  const { sessions } = useSelector((state: ReduxStore) => state.storeConfiguration);
  const { banners } = useSelector((state: ReduxStore) => state.storeBanners);
  const { items } = useSelector((state: ReduxStore) => state.storeSession);

  console.log({ sessions, banners, items });

  useEffect(() => {
    dispatch(loadConfiguration());
  }, []);

  useEffect(()=>{
    setDateHours(moment())
  }, [moment()])

  useEffect(() => {
    sessions.length > 0 && dispatch(loadBanners({sessionId: sessions[0].id}));
    sessions.length > 0 && dispatch(loadSession({sessionId: sessions[1].id}))
  }, [sessions]);

  return (
    <div className='home-container'>
      <Container>
        <ContentSlider items={banners} itemsOnScreen={1} />
        <SectionStore
          title="Ofertas da semana"
          titleButton="Ver tudo"
          actionButton={()=>console.log('teste')}
          content={()=>{
            return <>
            {
              items.map(item => {
                let arrayPlatform = [];
                item?.isSteam && arrayPlatform.push('STEAM')
                item?.windows && arrayPlatform.push('WINDOWS')
                
                  return <CardStore
                  banner={item.imageUrl}
                  title={item.name}
                  discount={Number(item.discount).toFixed(2)}
                  value={item.price}
                  platform={arrayPlatform}
                  duration={item.offerValidUntil}
                  pay={item.url}
                  dateHourNow={dateHours}
                />
              })
            }
            </>
          }}
        />
      </Container>
    </div>
  );
};

export default Home;
