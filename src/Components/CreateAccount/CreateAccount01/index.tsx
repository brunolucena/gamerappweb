import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';
import BackButton from '../../BackButton';

import Progress from '../../Progress';
import { useHistory } from 'react-router-dom';

const CreateAccount01: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value } = event.target;

    setValue(value);

    if (value) {
      setError(false);
    }
  }

  function onClick() {
    if (value) {
      setError(false);

      history.push('/signup/phone-number');
    } else {
      setError(true);
    }
  }

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
        <TextField
          className='input-text'
          inputProps={{ 'aria-label': 'nome' }}
          helperText={error ? 'Campo obrigatório' : ''}
          error={error}
          onChange={onChange}
          placeholder='Nome'
          value={value}
        />

        <Button onClick={onClick} type='secondary'>
          Próximo
        </Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount01;
