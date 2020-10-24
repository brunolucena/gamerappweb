import React from 'react';
import BackButton from '../../BackButton';
import Progress from '../../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';

const CreateAccount02: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton to='/' />

        <strong>Criar conta</strong>

        <div></div>
      </Header>

      <Image>
        <Heart />
        <Progress initialValue='20' timeout={500} value='40' />
      </Image>

      <Main>
        <span>Agora, digite o seu celular</span>
      </Main>

      <Btn>
        <TextField className='input-text' inputProps={{ 'aria-label': 'phone-number' }} placeholder='Celular' />
        <Button type='secondary'>Próximo</Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount02;
