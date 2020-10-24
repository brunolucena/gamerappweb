import React from 'react';
import { Container, Header, Main, Footer, Img, Content } from './styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '../../Button';
import componentSrc from './componente.png';

const CreateAccount05: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconButton aria-label='delete' style={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon style={{ color: '#0dac3d' }} />
        </IconButton>
      </Header>

      <Main>
        <Img src={componentSrc} />
      </Main>

      <Content>
        <strong>Parabéns!</strong>
        <span>Seja muito bem vindo(a) ao GamerApp!</span>
      </Content>

      <Footer>
        <Button type='secondary'>Uhuu, vamos lá!</Button>
      </Footer>
    </Container>
  );
};

export default CreateAccount05;
