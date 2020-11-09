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
} from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PirateSrc from '../assets/pirate.png';
import TrophySrc from '../assets/trophy.png';
import ConfettiSrc from '../assets/confetti.png';
const NewLevel: React.FC = () => {
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
    </Container>
  );
};

export default NewLevel;
