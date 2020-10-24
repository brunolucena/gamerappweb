import React, { useState } from 'react';
import BackButton from '../../BackButton';
import Progress from '../../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';
import Button from '../../Button';

import { useHistory } from 'react-router-dom';

const CreateAccount03: React.FC = () => {
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

      history.push('/signup/password');
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <Header>
        <BackButton to='signup/phone-number' />
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
        <TextField
          className='input-text'
          inputProps={{ 'aria-label': 'email' }}
          helperText={error ? 'Campo obrigatório' : ''}
          error={error}
          onChange={onChange}
          placeholder='Email'
          value={value}
        />
        <Button onClick={onClick} type='secondary'>
          Próximo
        </Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount03;
