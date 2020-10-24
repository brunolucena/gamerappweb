import React, { useState } from 'react';
import Button from '../../../Components/Button';
import BackButton from '../../../Components/BackButton';
import Progress from '../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';

import { useHistory } from 'react-router-dom';

const CreateAccount04: React.FC = () => {
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

      history.push('/signup/finish');
    } else {
      setError(true);
    }
  }
  return (
    <Container>
      <Header>
        <BackButton to='signup/email' />
        <strong>Criar conta</strong>
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
        <TextField
          className='input-text'
          inputProps={{ 'aria-label': 'Password' }}
          helperText={error ? 'Campo obrigatório' : ''}
          error={error}
          onChange={onChange}
          placeholder='Senha'
          value={value}
          type='password'
        />
        <Button onClick={onClick} type='secondary'>
          Próximo
        </Button>
        <span>Li e Concordo com os Termos de Uso e Privacidade</span>
      </Btn>
    </Container>
  );
};

export default CreateAccount04;
