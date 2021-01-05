import Box from 'Components/Box';
import clsx from 'clsx';
import Heading from 'Components/Heading';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import React, { useEffect, useRef, useState } from 'react';
import Text from 'Components/Text';
import { ConfigurationModelWithUrl } from 'Modules/Loja/Store/Ducks/Configuration/model';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
  icon?: string;
  sessions: ConfigurationModelWithUrl[];
  title: string;
  version?: 'desktop' | 'mobile';
}

const ButtonWithDropdown: React.FC<Props> = ({ icon, sessions, title, version = 'desktop' }) => {
  const node = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const dropdownClasses = clsx('button-dropdown', 'animate__animated', 'animate__faster', {
    opened: isOpened,
    animate__fadeInDown: isOpened,
    animate__fadeOutUp: fadeOut && !isOpened,
  });

  const dropdownMobileClasses = clsx('button-dropdown', {
    opened: isOpened,
  });

  useEffect(() => {
    const handleClick = (e: any) => {
      if (node.current && node.current.contains(e.target)) {
        // inside click
        return;
      }

      // outside click
      setIsOpened(false);
      setFadeOut(true);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [version]);

  const toggleOpened = () => {
    setFadeOut(true);
    setIsOpened(!isOpened);
  };

  return version === 'desktop' ? (
    <div className='button-with-dropdown-wrapper' ref={node}>
      <button className='button-with-dropdown' onClick={toggleOpened}>
        <img alt={title} src={icon} style={{ height: 20 }} />

        <Box marginEnd={1} marginStart={8}>
          <Heading size={20}>{title}</Heading>
        </Box>

        <KeyboardArrowDown style={{ color: '#343434', fontSize: 24 }} />
      </button>

      <Box
        className={dropdownClasses}
        borderRadius={5}
        borderStyle='shadow'
        style={{ display: !isOpened && !fadeOut ? 'none' : 'block' }}
      >
        {sessions.map((menu, index) => (
          <Link className='button-dropdown-item' key={menu.id + index} to={`/produtos/${menu.id}`}>
            <Text size={18} weight='semi-bold'>
              {menu.title}
            </Text>
          </Link>
        ))}
      </Box>
    </div>
  ) : (
    <div className='button-with-dropdown-mobile-wrapper' ref={node}>
      <button className='button-with-dropdown' onClick={toggleOpened}>
        <img alt={title} src={icon} style={{ height: 20 }} />

        <Box marginEnd={1} marginStart={8}>
          <Heading size={20}>{title}</Heading>
        </Box>

        <KeyboardArrowDown style={{ color: '#343434', fontSize: 24 }} />
      </button>

      <Box className={dropdownMobileClasses} borderRadius={5} borderStyle='shadow'>
        {sessions.map((menu, index) => (
          <Link className='button-dropdown-item' key={menu.id + index} to={`/produtos/${menu.id}`}>
            <Text size={18} weight='semi-bold'>
              {menu.title}
            </Text>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default ButtonWithDropdown;
