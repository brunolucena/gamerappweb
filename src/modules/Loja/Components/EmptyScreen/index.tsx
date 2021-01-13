import Box from 'components/Box';
import Button from 'components/Button';
import Container from 'components/Container';
import Heading from 'components/Heading';
import styles from './styles.module.scss';
import Text from 'components/Text';
import { useTypedSelector } from 'store/redux/store';

interface Props {
  text: string;
}

export default function EmptyScreen({ text }: React.PropsWithChildren<Props>) {
  const { menuSessions: menuSessionsRedux } = useTypedSelector(state => state.configuration);

  const menuSession = menuSessionsRedux.find((menu) => menu.title === 'Promoções') ?? menuSessionsRedux[0];

  return (
    <Box className={styles['empty-screen-wrapper']}>
      <Container>
        <Box className={styles['empty-screen-content']}>
          <Box>
            <img alt='Gamer Rex' className={styles['gamer-rex']} src='/images/gamer-rex/gamer-rex.svg' />
          </Box>

          <Box alignItems='center' direction='column' display='flex' gap={25}>
            <Box className={styles.balloon}>
              <Heading size={28} weight='bold'>
                {text}
              </Heading>
            </Box>

            <Box className={styles['buttons-desktop']}>
              {menuSession && (
                <Button to={`/produtos/${menuSession.id}`}>
                  <Text color='white' size={18}>
                    Ver {menuSession.title.toLowerCase()}
                  </Text>
                </Button>
              )}

              <Button to='/' type='clear'>
                <Text size={18}>Ir para home</Text>
              </Button>
            </Box>
          </Box>

          <Box className={styles['buttons-mobile']}>
            {menuSession && (
              <Button to={`/produtos/${menuSession.id}`}>
                <Text color='white' size={18}>
                  Ver {menuSession.title.toLowerCase()}
                </Text>
              </Button>
            )}

            <Button to='/' type='clear'>
              <Text size={18}>Ir para home</Text>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
