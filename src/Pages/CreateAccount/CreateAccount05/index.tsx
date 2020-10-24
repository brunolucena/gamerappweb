import React from 'react';
import { Container, Header, Main, Footer, Img, Content } from './styles';
import Button from '../../../Components/Button';
import BackButton from '../../../Components/BackButton';
import componentSrc from './componente.png';

const CreateAccount05: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
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
