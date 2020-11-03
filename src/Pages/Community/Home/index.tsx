import React from 'react';
import { Container, Header, Logo, Trophy, Pirate, Selection, Footer } from './styles';
import Search from '../../../Components/Search';
import Notification from '../../../Components/Notification';
import LogoSrc from '../../../Components/LogoGreen/Logo.png';
import TrophySrc from './assets/trophy.png';
import PirateSrc from './assets/pirate.png';
import Post from './Post';

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
        <p>Home</p>
        <p>Loja</p>
        <p>Marketplace</p>
        <p>Trocas</p>
        <p>Mais</p>
      </Footer>
    </Container>
  );
};

export default Home;
