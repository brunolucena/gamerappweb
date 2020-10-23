import React from 'react';
import { Container, Main, Bottom, TextField2, Header } from './styles';
import Logo from '../Logo/';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../BackButton';
import Button from '../Button';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '34ch',
    },
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header>
        <BackButton iconColor='#ffffff' to='/' />

        <Logo />
      </Header>

      <Main>
        <TextField2 className={classes.root}>
          <TextField
            id='standard-search'
            label='E-mail'
            type='search'
            color='primary'
            InputProps={{
              endAdornment: <EmailIcon fontSize='small' style={{ color: '#0dac3d' }} />,
            }}
          />
          <TextField
            id='standard-password-input'
            label='Senha'
            type='password'
            autoComplete='current-password'
            InputProps={{
              endAdornment: <LockIcon fontSize='small' style={{ color: '#0dac3d' }} />,
            }}
          />
        </TextField2>

        <Button type='secondary'>Login</Button>
      </Main>

      <Bottom>
        <button>Esqueci a senha</button>
      </Bottom>
    </Container>
  );
};

export default Login;
