import React from 'react';
import { Container, Header, Pirate, Time, Tag, Wrapper, Menu, Review, WrapperButton } from './styles';
import PirateSrc from '../assets/pirate.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Pirate src={PirateSrc} />
        <Wrapper>
          <p>FLAVIODANIEL</p>
          <span>.</span>
          <button>Seguir</button>
        </Wrapper>
        <WrapperButton>
          <Review>Reviews</Review>
          <Menu>
            <MoreVertIcon />
          </Menu>
        </WrapperButton>
        {/* <Time>3h</Time>
        <Tag>CS GO das Antiga </Tag> */}
      </Header>
    </Container>
  );
};
export default Post;
