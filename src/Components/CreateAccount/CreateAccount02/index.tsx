import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Input from '@material-ui/core/Input';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';

const CreateAccount02: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconButton aria-label='delete' style={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon style={{ color: '#0dac3d' }} />
        </IconButton>
        <b>Criar conta</b>
        <div></div>
      </Header>

      <Image>
        <Heart />
        <progress max='100' value='40'></progress>
      </Image>

      <Main>
        <span>Agora, digite o seu celular</span>
      </Main>

      <Btn>
        <Input placeholder='Celular' inputProps={{ 'aria-label': 'description' }} />
        <Button type='secondary'>Próximo</Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount02;
