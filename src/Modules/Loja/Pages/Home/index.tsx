import Container from 'Components/Container';
import ContentSlider, { Item } from 'Components/ContentSlider';
import { loadConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import './styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { sessions } = useSelector((state: ReduxStore) => state.storeConfiguration);

  const items: Array<Item> = [
    {
      id: '1',
      url: 'https://olhardigital.com.br/wp-content/uploads/2020/09/20200925024455.jpg',
    },
    {
      id: '2',
      url: 'https://images8.alphacoders.com/710/thumb-1920-710329.jpg',
    },
    {
      id: '3',
      url: 'https://deathstrandingpc.505games.com/wp-content/themes/deathstranding/img/topimage.jpg',
    },
  ];

  console.log({ sessions });

  useEffect(() => {
    dispatch(loadConfiguration());
  }, [dispatch]);

  return (
    <div className='home-container'>
      <Container>
        <ContentSlider items={items} itemsOnScreen={1} />
      </Container>
    </div>
  );
};

export default Home;
