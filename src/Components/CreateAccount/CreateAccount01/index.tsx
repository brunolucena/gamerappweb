import React from 'react';
import Input from '@material-ui/core/Input';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';
import BackButton from '../../BackButton';

import './styles.css';
import Progress from '../../Progress';

const CreateAccount01: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton to='/' />

        <strong>Criar conta</strong>

        <div></div>
      </Header>

      <Image>
        <Heart />

        <Progress timeout={500} value='20' />
      </Image>

      <Main>
        <strong>Seja bem vindo(a)!</strong>
        <span>Pra começar, qual o seu nome?</span>
      </Main>

      <Btn>
        <Input classes={{ input: 'input-text' }} placeholder='Nome' inputProps={{ 'aria-label': 'nome' }} />
        <Button type='secondary'>Próximo</Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount01;
