import React, { useEffect, useState } from 'react';
import Input from '@material-ui/core/Input';
import { Container, Main, Header, Image, Btn, ProgressWrapper } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';
import BackButton from '../../BackButton';

import './styles.css';

const CreateAccount01: React.FC = () => {
  const [progress, setProgress] = useState('0');

  useEffect(() => {
    setTimeout(() => {
      setProgress('20');
    }, 500);
  });

  return (
    <Container>
      <Header>
        <BackButton to='/' />

        <strong>Criar conta</strong>

        <div></div>
      </Header>

      <Image>
        <Heart />

        <ProgressWrapper>
          <progress max='100' value={progress}></progress>
        </ProgressWrapper>
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
