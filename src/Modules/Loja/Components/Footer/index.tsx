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
import './styles.scss';

const Footer: React.FC = () => {
  return (
    <Box className='footer-wrapper'>
      <Box className='footer-container'>
        <Box direction='column' display='flex' gap={50}>
          <Link to='/'>
            <Logo variant='block-green-gray' width={170} />
          </Link>

          <Box alignItems='center' display='flex' gap={10}>
            <Facebook color='white' link='https://www.facebook.com/baixegamerapp' width={40} />
            <Instagram color='white' link='https://www.instagram.com/baixegamerapp/' width={40} />
            <Youtube color='white' link='https://www.youtube.com/channel/UCE426J_NLjT7BOBSxWuk0ig' width={40} />
            <LinkedIn color='white' link='https://www.linkedin.com/company/gamerapp/' width={40} />
          </Box>

          <a href='https://play.google.com/store/apps/details?id=com.weevolvegamerapp' rel='noopener noreferrer' target='_blank'>
            <img alt='disponível no google play' src={DisponivelGooglePlay} style={{ width: 190 }} />
          </a>
        </Box>

        <Box direction='column' display='flex' gap={40}>
          <Heading color='white' size={28}>
            Acelerados por
          </Heading>

          <Box>
            <Box alignItems='center' display='flex' gap={20} marginBottom={30}>
              <img alt='Acelerada Inovativa Brasil 2020' src={AceleradaInovativaBrasil2020} style={{ width: 120 }} />
              <img alt='Aceleradora Inova Unigran' src={AceleradoraInovaUnigran} style={{ width: 120 }} />
            </Box>

            <img alt='Capital Empreendedor Sebrae' src={CapitalEmpreendedorSebrae} style={{ width: 260 }} />
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={25}>
          <Heading color='white' size={28}>
            Menu
          </Heading>

          <Box direction='column' display='flex' gap={15}>
            <Link to='/'>
              <Heading color='white' size={20} weight='normal'>
                Home
              </Heading>
            </Link>

            <Link to='/terms-of-use'>
              <Heading color='white' size={20} weight='normal'>
                Termos de Uso
              </Heading>
            </Link>

            <Link to='/privacy-policy'>
              <Heading color='white' size={20} weight='normal'>
                Política de Privacidade
              </Heading>
            </Link>
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={30}>
          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={28}>
              Contato
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Heading color='white' size={20} weight='normal'>
                contato@gamerapp.com.br
              </Heading>

              <Heading color='white' size={20} weight='normal'>
                Whatsapp: (11) 97045-3206
              </Heading>
            </Box>
          </Box>

          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={28}>
              Suporte
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Heading color='white' size={20} weight='normal'>
                suporte@gamerapp.com.br
              </Heading>

              <Heading color='white' size={20} weight='normal'>
                Whatspp: (67) 99238-3662
              </Heading>
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
