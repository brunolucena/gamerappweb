import AceleradaInovativaBrasil2020 from './assets/acelerada_inovativa_brasil_2020.png';
import AceleradoraInovaUnigran from './assets/aceleradora_inova_unigran.png';
import Box from 'Components/Box';
import CapitalEmpreendedorSebrae from './assets/capital_empreendedor_sebrae.png';
import DisponivelGooglePlay from './assets/disponivel_google_play.png';
import Facebook from 'Components/SocialMedia/Facebook';
import Heading from 'Components/Heading';
import Instagram from 'Components/SocialMedia/Instagram';
import LinkedIn from 'Components/SocialMedia/LinkedIn';
import Logo from 'Components/Logo';
import React from 'react';
import Text from 'Components/Text';
import Youtube from 'Components/SocialMedia/Youtube';
import { Link } from 'react-router-dom';
import { ReduxStore } from 'Store/Redux';
import { useSelector } from 'react-redux';
import './styles.scss';

const Footer: React.FC = () => {
  const { menuSessions: menuSessionsRedux } = useSelector((state: ReduxStore) => state.storeConfiguration);

  const menuSessions = menuSessionsRedux.slice(0, 2);

  return (
    <Box className='footer-wrapper'>
      <Box className='footer-container'>
        <Box direction='column' display='flex' gap={50}>
          <Link to='/'>
            <Logo variant='block-green-gray' width={150} />
          </Link>

          <Box alignItems='center' display='flex' gap={10}>
            <Facebook color='white' link='https://www.facebook.com/baixegamerapp' width={30} />
            <Instagram color='white' link='https://www.instagram.com/baixegamerapp/' width={30} />
            <Youtube color='white' link='https://www.youtube.com/channel/UCE426J_NLjT7BOBSxWuk0ig' width={30} />
            <LinkedIn color='white' link='https://www.linkedin.com/company/gamerapp/' width={30} />
          </Box>

          <a href='https://play.google.com/store/apps/details?id=com.weevolvegamerapp' rel='noopener noreferrer' target='_blank'>
            <img alt='disponível no google play' src={DisponivelGooglePlay} style={{ width: 150 }} />
          </a>
        </Box>

        <Box direction='column' display='flex' gap={40}>
          <Heading color='white' size={20}>
            Acelerados por
          </Heading>

          <Box>
            <Box alignItems='center' display='flex' gap={20} marginBottom={30}>
              <a
                href='https://www.inovativabrasil.com.br/wp-content/uploads/2020/11/Encarte-Experience-Dezembro-2020.pdf'
                rel='noopener noreferrer'
                target='_blank'
              >
                <img alt='Acelerada Inovativa Brasil 2020' src={AceleradaInovativaBrasil2020} style={{ width: 120 }} />
              </a>

              <a href='https://www.inovaunigran.com.br' rel='noopener noreferrer' target='_blank'>
                <img alt='Aceleradora Inova Unigran' src={AceleradoraInovaUnigran} style={{ width: 120 }} />
              </a>
            </Box>

            <a href='https://capitalempreendedor2020.com.br/startup-gamerapp' rel='noopener noreferrer' target='_blank'>
              <img alt='Capital Empreendedor Sebrae' src={CapitalEmpreendedorSebrae} style={{ width: 260 }} />
            </a>
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={25}>
          <Heading color='white' size={20}>
            Menu
          </Heading>

          <Box direction='column' display='flex' gap={15}>
            <Link to='/'>
              <Text color='white'>Home</Text>
            </Link>

            {menuSessions.map((menu, index) => (
              <Link key={menu.id + index} to={`/produtos/${menu.id}`}>
                <Text color='white'>{menu.title}</Text>
              </Link>
            ))}

            <Link to='/terms-of-use'>
              <Text color='white'>Termos de Uso</Text>
            </Link>

            <Link to='/privacy-policy'>
              <Text color='white'>Política de Privacidade</Text>
            </Link>
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={30}>
          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={20}>
              Contato
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Text color='white'>contato@gamerapp.com.br</Text>

              <Text color='white'>Whatsapp: (11) 97045-3206</Text>
            </Box>
          </Box>

          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={20}>
              Suporte
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Text color='white'>suporte@gamerapp.com.br</Text>

              <Text color='white'>Whatspp: (67) 99238-3662</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className='disclaimer'>
        <Text align='center' color='lightGray'>
          © 2020 - GamerApp Companhia Tecnológica LTDA CNPJ n.º 34.425.831/0001-27 - Todos os direitos reservados
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
