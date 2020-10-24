import React from 'react';
import BackButton from '../../BackButton';
import Progress from '../../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';

const CreateAccount03: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
        <strong>Criar conta</strong>
        <div></div>
      </Header>

      <Image>
        <Heart />
        <Progress initialValue='40' timeout={500} value='60' />
      </Image>

      <Main>
        <span>Qual o seu e-mail?</span>
      </Main>

      <Btn>
        <TextField className='input-text' inputProps={{ 'aria-label': 'email' }} placeholder='Email' />
        <Button type='secondary'>Próximo</Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount03;
