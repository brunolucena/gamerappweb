import React, { useState } from 'react';
import Button from '../../../Components/Button';
import BackButton from '../../../Components/BackButton';
import Progress from '../Progress';
import TextField from '@material-ui/core/TextField';
import { Container, Main, Header, Image, Btn } from './styles';
import Heart from '../Hearts';

import { useHistory } from 'react-router-dom';

const CreateAccount02: React.FC = () => {
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

      history.push('/signup/email');
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <Header>
        <BackButton to='/signup/name' />

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
        <TextField
          className='input-text'
          inputProps={{ 'aria-label': 'phone-number' }}
          helperText={error ? 'Campo obrigatório' : ''}
          error={error}
          onChange={onChange}
          placeholder='Celular'
          value={value}
        />
        <Button onClick={onClick} type='secondary'>
          Próximo
        </Button>
      </Btn>
    </Container>
  );
};

export default CreateAccount02;
