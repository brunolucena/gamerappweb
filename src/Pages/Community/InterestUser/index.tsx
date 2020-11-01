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
          <p>Veja só o que te interessa mais! Ah, você pode alterar depois!</p>
        </Text>
      </Header>

      <Main>
        <button>teste</button>
      </Main>

      <Bottom>
        <Button type='secondary'>
          {/* {isSelected ? 'selected' : 'not selected'} */}
          Próximo
        </Button>
      </Bottom>
    </Container>
  );
};

export default InterestUser;
