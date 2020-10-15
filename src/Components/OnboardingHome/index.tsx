import React from 'react';
import { Container, Main, Background, Bottom, Header, LogoReaper } from './styles';
// import LogoSrc from './gamerlogo.png';
import ControlSrc from './controls.png';
import Button from '../Button/';
import Logo from '../Logo/';

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
        <Button>Login</Button>

        <Button type='secondary'>Criar conta</Button>
      </Main>

      <Bottom>
        <span>@Gamer App - Todos os direitos reservados - V 1.0.0.0</span>
      </Bottom>
    </Container>
  );
};

export default OnboardingHome;
