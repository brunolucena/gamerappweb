import React from 'react';
import { Container, Main, Background, Bottom, Header, LogoReaper } from './styles';
import ControlSrc from './controls.png';
import Logo from '../../Components/Logo';
import Button from '../../Components/Button';

const OnboardingHome: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <LogoReaper>
        <Background src={ControlSrc} />
      </LogoReaper>

      <Main>
        <Button to='/login'>Login</Button>

        <Button to='/signup' type='secondary'>
          Criar conta
        </Button>
      </Main>

      <Bottom>
        <span>@Gamer App - Todos os direitos reservados - V 1.0.0.0</span>
      </Bottom>
    </Container>
  );
};

export default OnboardingHome;
