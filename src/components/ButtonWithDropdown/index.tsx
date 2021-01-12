import Box from 'components/Box';
import clsx from 'clsx';
import Heading from 'components/Heading';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Link from 'next/link';
import styles from './styles.module.scss';
import Text from 'components/Text';
import { ConfigurationModelWithUrl } from 'modules/Loja/Lib/Configuration/models';
import { useEffect, useRef, useState } from 'react';

interface Props {
  icon?: string;
  sessions?: ConfigurationModelWithUrl[];
  title: string;
  version?: 'desktop' | 'mobile';
}

const ButtonWithDropdown: React.FC<Props> = ({ icon, sessions = [], title, version = 'desktop' }) => {
  const node = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const dropdownClasses = clsx(styles['button-dropdown'], 'animate__animated', 'animate__faster', isOpened && styles.opened, isOpened && 'animate__fadeInDown', (fadeOut && !isOpened) && 'animate__fadeOutUp');

  const dropdownMobileClasses = clsx(styles['button-dropdown'], isOpened && styles.opened);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (node.current && node.current.contains(e.target)) {
        // inside click
        return;
      }

      // outside click
      setIsOpened(false);
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
    <div className={styles['button-with-dropdown-wrapper']} ref={node}>
      <button className={styles['button-with-dropdown']} onClick={toggleOpened}>
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
        {sessions?.map((menu, index) => (
          <Link key={menu.id + index} href={`/produtos/${menu.id}`}>
            <a className={styles['button-dropdown-item']}>
              <Text size={18} weight='semi-bold'>
                {menu.title}
              </Text>
            </a>
          </Link>
        ))}
      </Box>
    </div>
  ) : (
      <div className={styles['button-with-dropdown-mobile-wrapper']} ref={node}>
        <button className={styles['button-with-dropdown']} onClick={toggleOpened}>
          <img alt={title} src={icon} style={{ height: 20 }} />

          <Box marginEnd={1} marginStart={8}>
            <Heading size={20}>{title}</Heading>
          </Box>

          <KeyboardArrowDown style={{ color: '#343434', fontSize: 24 }} />
        </button>

        <Box className={dropdownMobileClasses} borderRadius={5} borderStyle='shadow'>
          {sessions?.map((menu, index) => (
            <Link key={menu.id + index} href={`/produtos/${menu.id}`}>
              <a className={styles['button-dropdown-item']}>
                <Text size={18} weight='semi-bold'>
                  {menu.title}
                </Text>
              </a>
            </Link>
          ))}
        </Box>
      </div>
    );
};

export default ButtonWithDropdown;
