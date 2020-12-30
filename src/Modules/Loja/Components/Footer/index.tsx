import Box from 'Components/Box';
import Logo from 'Components/Logo';
import React from 'react';
import './styles.scss';

const Footer: React.FC = () => {
  return (
    <Box className='footer-container'>
      <Box>
        <Logo />
      </Box>
    </Box>
  );
};

export default Footer;
