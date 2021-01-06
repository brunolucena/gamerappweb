import Box from 'Components/Box';
import Button from 'Components/Button';
import Container from 'Components/Container';
import GamerRex from './assets/gamerrex.svg';
import Heading from 'Components/Heading';
import React from 'react';
import Text from 'Components/Text';
import { ReduxStore } from 'Store/Redux';
import { useSelector } from 'react-redux';
import './styles.scss';

interface Props {
  text: string;
}

const EmptyScreen: React.FC<Props> = ({ text }) => {
  const { menuSessions: menuSessionsRedux } = useSelector((state: ReduxStore) => state.storeConfiguration);

  const menuSession = menuSessionsRedux.find((menu) => menu.title === 'Promoções') ?? menuSessionsRedux[0];

  return (
    <Box className='empty-screen-wrapper'>
      <Container>
        <Box className='empty-screen-content'>
          <Box>
            <img alt='Gamer Rex' className='gamer-rex' src={GamerRex} />
          </Box>

          <Box alignItems='center' direction='column' display='flex' gap={40}>
            <Box className='balloon'>
              <Heading size={28} weight='bold'>
                {text}
              </Heading>
            </Box>

            <Box className='buttons-desktop'>
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

          <Box className='buttons-mobile'>
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
};

export default EmptyScreen;
