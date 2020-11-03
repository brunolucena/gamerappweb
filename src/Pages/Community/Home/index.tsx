import React from 'react';
import { Container, Header, Logo, Trophy, Pirate, Selection, Footer, Icons, Store, Shop, Trade, Names } from './styles';
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
const Home: React.FC = () => {
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
          <HomeOutlinedIcon />
          <Store src={StoreSrc} />
          <Shop src={ShopSrc} />
          <Trade src={TradeSrc} />
          <MenuIcon />
        </Icons>
        <Names>
          <p>Home</p>
          <p>Loja</p>
          <p>Marketplace</p>
          <p>Trocas</p>
          <p>Mais</p>
        </Names>
      </Footer>
    </Container>
  );
};

export default Home;
