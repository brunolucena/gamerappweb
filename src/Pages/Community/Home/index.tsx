import React from 'react';
import { Container, Header, Logo, Trophy, Pirate, Selection, Footer, Icons, Store, Shop, Trade } from './styles';
import Search from '../../../Components/Search';
import Notification from '../../../Components/Notification';
import LogoSrc from '../../../Components/LogoGreen/Logo.png';
import TrophySrc from './assets/trophy.png';
import PirateSrc from './assets/pirate.png';
import Post from './Post';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import StoreSrc from './assets/loja.png';
import ShopSrc from './assets/shop.png';
import TradeSrc from './assets/joystick.png';

interface Props {
  iconColor?: string;
}

const Home: React.FC<Props> = ({ iconColor }) => {
  return (
    <Container>
      <Header>
        <p />
        <p />
        <Pirate src={PirateSrc} />
        <Search />
        <div />
        <Logo src={LogoSrc} />
        <div />
        <Notification />
        <Trophy src={TrophySrc} />
        <p />
        <p />
      </Header>

      <Selection>
        <button>Reviews</button>
      </Selection>

      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Footer>
        <Icons>
          <button>
            <HomeOutlinedIcon style={{ color: iconColor || '#202020', fontSize: '25px' }} />
            {'Home'}
          </button>
          <button>
            <Store src={StoreSrc} />
            {'Loja'}
          </button>
          <button>
            <Shop src={ShopSrc} />
            {'Marketplace'}
          </button>
          <button>
            <Trade src={TradeSrc} />
            {'Trocas'}
          </button>
          <button>
            <MenuIcon style={{ color: iconColor || '#202020', fontSize: '25px' }} />
            {'Mais'}
          </button>
        </Icons>
      </Footer>
    </Container>
  );
};

export default Home;
