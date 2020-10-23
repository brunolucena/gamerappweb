import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  iconColor?: string;
  to?: string;
}

const BackButton: React.FC<Props> = ({ iconColor, to }) => {
  const history = useHistory();

  function onClick() {
    if (to) {
      history.push(to);
    } else {
      history.goBack();
    }
  }

  return (
    <IconButton aria-label='voltar' role='link' onClick={onClick} style={{ alignSelf: 'flex-start' }}>
      <ArrowBackIcon style={{ color: iconColor || '#0dac3d' }} />
    </IconButton>
  );
};

export default BackButton;
