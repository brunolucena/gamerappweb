import React from 'react';
import BackButton from '../../BackButton';
import Progress from '../../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';

const CreateAccount04: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
        <b>Criar conta</b>
        <div></div>
      </Header>

      <Image>
        <Heart />
        <Progress initialValue='60' timeout={500} value='80' />
      </Image>

      <Main>
        <span>Cadastre uma senha de 6 números</span>
      </Main>

      <Btn>
        <TextField className='input-text' inputProps={{ 'aria-label': 'password' }} placeholder='Senha' type='password' />
        <Button type='secondary'>Próximo</Button>
        <span>Li e Concordo com os Termos de Uso e Privacidade</span>
      </Btn>
    </Container>
  );
};

export default CreateAccount04;
