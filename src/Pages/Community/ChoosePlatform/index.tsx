import React from 'react';
import { Container, Header, Text, Footer, Main, Column, Btn } from './styles';
import Button from '../../../Components/Button';
import nintendo from './nintendo.png';

const ChoosePlatform: React.FC = () => {
  return (
    <Container>
      <Header>
        <Btn>
          <button>Pular</button>
        </Btn>
        <Text>
          <strong>Escolha sua plataforma</strong>
          <span>Pode ser mais de uma, ok?</span>
        </Text>
      </Header>

      <Main>
        <Column>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Column>
      </Main>

      <Footer>
        <Button type='secondary'>Próximo</Button>
      </Footer>
    </Container>
  );
};

export default ChoosePlatform;
