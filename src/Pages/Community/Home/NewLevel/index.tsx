import React from 'react';
import {
  Container,
  Header,
  Wrapper,
  Top,
  Bot,
  WrapperButton,
  Menu,
  Time,
  Pirate,
  Left,
  Right,
  Trophy,
  NewLvl,
  Confetti,
  Footer,
  Favorite,
  Like,
  Dislike,
  Message,
  WrapperLeft,
  WrapperRight,
} from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PirateSrc from '../assets/pirate.png';
import TrophySrc from '../assets/trophy.png';
import ConfettiSrc from '../assets/confetti.png';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteSrc from '../assets/favorite.png';

interface Props {
  iconColor?: string;
}

const NewLevel: React.FC<Props> = ({ iconColor }) => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Left>
            <Pirate src={PirateSrc} />
          </Left>
          <Top>
            <p>FLAVIODANIEL</p>
            <span>.</span>
            <Time>3h</Time>
          </Top>
          <Bot>
            <p>Acabou de subir mais um level!</p>
          </Bot>
        </Wrapper>

        <Right>
          <NewLvl>
            <Trophy src={TrophySrc} />
            <p>#21</p>
          </NewLvl>
          <Confetti src={ConfettiSrc} />
        </Right>

        <WrapperButton>
          <Menu>
            <MoreVertIcon style={{ fontSize: '20px' }} />
          </Menu>
        </WrapperButton>
      </Header>

      <Footer>
        <WrapperLeft>
          <Like>
            <button>
              <ArrowUpwardIcon style={{ color: iconColor || '#5c5c5c', fontSize: '20px' }} />
            </button>
            <p>10k</p>
          </Like>

          <Dislike>
            <button>
              <ArrowDownwardIcon style={{ color: iconColor || '#5c5c5c', fontSize: '20px' }} />
            </button>
            <p>5k</p>
          </Dislike>

          <Message>
            <button>
              <MessageOutlinedIcon style={{ color: iconColor || '#5c5c5c', fontSize: '22px' }} />
            </button>
            <p>420</p>
          </Message>
        </WrapperLeft>

        <WrapperRight>
          <button>
            <ShareOutlinedIcon style={{ color: iconColor || '#5c5c5c', fontSize: '20px' }} />
          </button>
          <button>
            <Favorite src={FavoriteSrc} />
          </button>
        </WrapperRight>
      </Footer>
    </Container>
  );
};

export default NewLevel;
