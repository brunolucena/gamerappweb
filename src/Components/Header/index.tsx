import React from 'react';
import './styles.scss';
import logo from './logo.svg';

const Header: React.FC = () => {
    return <div className="containerHeader">
        <div
        style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'none',
            backgroundSize: 'cover',
            width: '103px',
            height: '37px'
          }}>
        </div>
    </div>
}

export default Header;