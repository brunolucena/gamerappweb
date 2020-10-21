import React from 'react';
import { Container, Main } from './styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '../../Button';

const PasswordRecovery03: React.FC = () => {
  return (
    <Container>
      <IconButton aria-label='delete' style={{ alignSelf: 'flex-start' }}>
        <ArrowBackIcon style={{ color: '#0dac3d' }} />
      </IconButton>

      <Main>
        <b>Nova senha</b>
        <span>Cadastre a sua nova senha</span>
        <Button>Cadastrar nova senha</Button>
      </Main>
    </Container>
  );
};

export default PasswordRecovery03;
