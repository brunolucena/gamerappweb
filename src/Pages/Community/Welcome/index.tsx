import React from 'react';
import KeySrc from './cloud.png';
import { Container, Img, Baloon, Main, Img2, Img3, Footer } from './styles';
import Button from '../../../Components/Button';
import GamerRexSrc from '../../../Components/GamerRex/rex.png';
import TerrainSrc from './terrain.png';
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
        <Img2 src={GamerRexSrc} />
      </Main>

      <Footer>
        <Img3 src={TerrainSrc} />
      </Footer>
    </Container>
  );
};

export default Welcome;
