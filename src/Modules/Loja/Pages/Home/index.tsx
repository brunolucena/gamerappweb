import Container from 'Components/Container';
import ContentSlider, { Item } from 'Components/ContentSlider';
import SectionStore from 'Components/SectionStore';
import CardStore from 'Components/CardStore';
import React, { useEffect } from 'react';
import { loadConfiguration } from '../../Store/Ducks/Configuration';
import './styles.scss';
import axios from "axios";
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();
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

  const getConfigutarion = async () => {
    try {
      axios({
        method: 'get',
        url: 'https://gamerapp-api-dev.azurewebsites.net/StoreProduct/Config/v1',
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      .then(response => console.log('teste: ', response))

    } catch(err) {
        // TODO
        // adicionar tratamento da exceção
        console.error(err);
    }
};

  useEffect(() => {
    getConfigutarion()
    dispatch(loadConfiguration())
  }, [])

  return (
    <div className='home-container'>
      <Container>
        <ContentSlider items={items} itemsOnScreen={1} />
        <SectionStore
          title="Ofertas da semana"
          titleButton="Ver tudo"
          actionButton={()=>console.log('teste')}
          content={()=>{
            return <>
            <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
            <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
            <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
             <CardStore
              banner="https://photooxy.com/uploads/worigin/2018/02/18/csgo5a8966ab1890e_7e7800c6b40a6060287774d300d1315e.jpg"
              title="CS Go COmpetitive"
              discount={10}
              value={100}
              platform={['PC','PS4']}
              duration="2d 02:00:00"
            />
            </>
          }}
        />
      </Container>
    </div>
  );
};

export default Home;
