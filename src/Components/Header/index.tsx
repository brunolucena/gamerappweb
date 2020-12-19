import React from 'react';
import './styles.scss';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='containerHeader'>
      <Link to='/'>
        <img alt='Logo GamerApp' src={logo} style={{ width: 103 }} />
      </Link>
    </div>
  );
};

export default Header;
