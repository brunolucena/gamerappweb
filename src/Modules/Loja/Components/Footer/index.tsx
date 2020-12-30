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
import Youtube from 'Components/SocialMedia/Youtube';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer: React.FC = () => {
  return (
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

        <a
          className='linkedin-container'
          href='https://play.google.com/store/apps/details?id=com.weevolvegamerapp'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='disponível no google play' src={DisponivelGooglePlay} style={{ width: 190 }} />
        </a>
      </Box>

      <Box direction='column' display='flex' gap={25}>
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
    </Box>
  );
};

export default Footer;
