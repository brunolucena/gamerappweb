import React from 'react';
import { Container, Img, Baloon, Main, Img2, Img3, Wrapper } from './styles';
import Button from '../../../Components/Button';
import GamerRexSrc from '../../../Components/GamerRex/rex.png';
import TerrainSrc from './terrain.png';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{ height: 100 }} />

        <Main>
          <Baloon>
            <strong>Bem vindo(a)!</strong>

            <p>
              Conheça novos jogadores, troque e <br /> compre games, veja reviews, acumule <br /> pontos e muito mais! Está
              preparado(a)?
            </p>

            <Button to='/community/chooseplatform' type='secondary'>
              Sim, vamos lá
            </Button>
          </Baloon>

          <Img2 src={GamerRexSrc} />
        </Main>

        <Img3 src={TerrainSrc} />
      </Wrapper>
    </Container>
  );
};

export default Welcome;
