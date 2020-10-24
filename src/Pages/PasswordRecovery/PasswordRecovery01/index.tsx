import React from 'react';
import { Container, Main, TextField2 } from './styles';
import Button from '../../../Components/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '34ch',
    },
  },
}));

const PasswordRecovery01: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <IconButton aria-label='delete' style={{ alignSelf: 'flex-start' }}>
        <ArrowBackIcon style={{ color: '#0dac3d' }} />
      </IconButton>

      <Main className={classes.root}>
        <b>Recuperar senha</b>
        <span>Digite o seu e-mail de cadastro para receber o código de recuperação</span>
      </Main>

      <TextField2>
        <TextField
          id='standard-search'
          label='E-mail'
          type='search'
          color='primary'
          InputProps={{
            endAdornment: <EmailIcon fontSize='small' style={{ color: '#0dac3d' }} />,
          }}
        />
        <Button>Enviar</Button>
      </TextField2>
    </Container>
  );
};

export default PasswordRecovery01;
