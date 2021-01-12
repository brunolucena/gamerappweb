import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router';

interface Props {
  fontSize?: number;
  iconColor?: string;
  to?: string;
}

const BackButton: React.FC<Props> = ({ fontSize = 24, iconColor, to }) => {
  const router = useRouter();

  function onClick() {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  }

  return (
    <IconButton aria-label='voltar' role='link' onClick={onClick} style={{ alignSelf: 'flex-start' }}>
      <ArrowBackIcon style={{ color: iconColor || '#0dac3d', fontSize }} />
    </IconButton>
  );
};

export default BackButton;
