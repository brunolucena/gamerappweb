import React from 'react';
import { Container, Header, Text, Btn, Bottom, Main } from './styles';
import Button from '../../../Components/Button';

const InterestUser: React.FC = () => {
  return (
    <Container>
      <Header>
        <Btn>
          <button>Pular</button>
        </Btn>
        <Text>
          <strong>Quais são seus interesses?</strong>
          <span>Veja só o que te interessa mais! Ah, você pode alterar depois!</span>
        </Text>
      </Header>

      <Main></Main>

      <Bottom>
        <Button type='secondary'>Próximo</Button>
      </Bottom>
    </Container>
  );
};

export default InterestUser;
