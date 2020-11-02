import React from 'react';
import {
  Container,
  Header,
  Pirate,
  Time,
  Tag,
  Top,
  Bot,
  Wrapper,
  Menu,
  WrapperButton,
  Main,
  Game,
  Text,
  Text2,
  Text3,
  Footer,
  Favorite,
} from './styles';
import PirateSrc from '../assets/pirate.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GameSrc from '../assets/game.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteSrc from '../assets/favorite.png';
const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Pirate src={PirateSrc} />
        <Wrapper>
          <Top>
            <p>FLAVIODANIEL</p>
            <span>.</span>
            <button>Seguir</button>
          </Top>
          <Bot>
            <Time>3h</Time>
            <p>.</p>
            <Tag>CS GO das Antiga </Tag>
          </Bot>
        </Wrapper>
        <WrapperButton>
          <p>Reviews</p>
          <Menu>
            <MoreVertIcon />
          </Menu>
        </WrapperButton>
      </Header>

      <Main>
        <Game src={GameSrc} />
        <Text>
          <strong>Esperava muito mais! Mas até que gostei</strong>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing<br></br> elit. Perferendis illum nisi esse, quam cum recusandae,
            mollitia accusantium blanditiis ipsam temporibus totam autem voluptas magni aliquam atque? Magni aspernatur asperiores
            sunt?
          </p>
          <Text2>
            <strong>5</strong>
            <strong>6</strong>
            <strong>8</strong>
          </Text2>
          <Text3>
            <p>Gráficos</p>
            <p>História</p>
            <p>Jogabilidade</p>
          </Text3>
        </Text>
      </Main>

      <Footer>
        <ArrowUpwardIcon />
        <p>10k</p>
        <ArrowDownwardIcon />
        <p>5k</p>
        <MessageIcon />
        <p>420</p>
        <p></p>
        <ShareIcon />
        <span></span>
        <Favorite src={FavoriteSrc} />
      </Footer>
    </Container>
  );
};
export default Post;
