import React from 'react';
import KeySrc from './cloud.png';
import { Container, Img, Baloon, Main } from './styles';
import Button from '../../../Components/Button';
import GamerRex from '../../../Components/GamerRex';
const Welcome: React.FC = () => {
  return (
    <Container>
      <Img src={KeySrc} />

      <Main>
        <Baloon>
          <strong>Bem vindo(a)!</strong>

          <span>
            Conheça novos jogadores, troque e compre games, veja reviews, acumule pontos e muito mais! Está preparado(a)?
          </span>
          <Button type='secondary'>Sim, vamos lá</Button>
        </Baloon>
      </Main>
      {/* <GamerRex /> */}
    </Container>
  );
};

export default Welcome;
