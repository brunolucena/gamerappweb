import React from 'react';
import LogoSrc from './gamerlogo.png';
import { Header, Logo2 } from './styles';

const Logo: React.FC = () => {
  return(
<Header>
    <Logo2 src={LogoSrc}/>
</Header>
  );
}

export default Logo;