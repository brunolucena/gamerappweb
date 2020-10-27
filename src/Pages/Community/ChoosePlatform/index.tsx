import React from 'react';
import { Container, Header, Text, Btn, Bottom, Main } from './styles';
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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
      </Main>

      <Bottom>
        <Button type='secondary'>Próximo</Button>
      </Bottom>
    </Container>
  );
};

export default ChoosePlatform;
