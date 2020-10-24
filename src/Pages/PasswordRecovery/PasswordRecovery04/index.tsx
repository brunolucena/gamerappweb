import React from 'react';
import { Container, Main, PadLock, Image, Bottom } from './styles';
import PadLockSrc from './padlock.png';
import Button from '../../../Components/Button';

const PasswordRecovery04: React.FC = () => {
  return (
    <Container>
      <Image>
        <PadLock src={PadLockSrc} />
      </Image>
      <Main>
        <b>Pronto!</b>
        <span>A sua senha foi alterada com sucesso.</span>
      </Main>
      <Bottom>
        <Button type='secondary'>Ok</Button>
      </Bottom>
    </Container>
  );
};

export default PasswordRecovery04;
