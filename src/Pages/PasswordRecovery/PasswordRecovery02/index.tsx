import React from 'react';
import { Container, Main } from './styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '../../../Components/Button';

const PasswordRecovery02: React.FC = () => {
  return (
    <Container>
      <IconButton aria-label='delete' style={{ alignSelf: 'flex-start' }}>
        <ArrowBackIcon style={{ color: '#0dac3d' }} />
      </IconButton>

      <Main>
        <b>Código</b>
        <span>Digite o código recebido no seu e-mail para redefinir a sua senha</span>
        <Button>Validar código</Button>
      </Main>
    </Container>
  );
};

export default PasswordRecovery02;
