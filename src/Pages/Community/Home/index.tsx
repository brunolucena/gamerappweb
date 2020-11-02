import React from 'react';
import { Container, Header, Logo, Trophy, Pirate, Selection, Footer } from './styles';
import SearchIcon from '../../../Components/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LogoSrc from '../../../Components/Logo/gamerlogo.png';
import TrophySrc from './assets/trophy.png';
import PirateSrc from './assets/pirate.png';
import Post from './Post';

interface Props {
  iconColor?: string;
}

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <p />
        <p />
        <Pirate src={PirateSrc} />
        <SearchIcon />
        <div />
        <Logo src={LogoSrc} />
        <div />
        <NotificationsIcon />
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
