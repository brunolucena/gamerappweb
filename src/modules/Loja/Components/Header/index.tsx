import Box from 'components/Box';
import ButtonWithDropdown from 'components/ButtonWithDropdown';
import Container from 'components/Container';
import Hamburguer from 'components/Hamburguer';
import Heading from 'components/Heading';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import styles from './styles.module.scss';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { useMenuSessions } from 'modules/Loja/Store/Configuration/swr';
import { useRouter } from 'next/router';

const PLAYSTATION_ID_SESSION = process.env.NEXT_PUBLIC_PLAYSTATION_ID_SESSION;
const XBOX_ID_SESSION = process.env.NEXT_PUBLIC_XBOX_ID_SESSION;

export default function Header() {
  const router = useRouter();
  const { data: menuSessions } = useMenuSessions();
  const [menuOpened, setMenuOpened] = useState(false);
  const [search, setSearch] = useState('');

  const handleNavigate = () => {
    if (search) {
      router.push({
        pathname: '/pesquisar',
        query: { search },
      });

      setSearch('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleNavigate();
    }
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [router.asPath]);

  return (
    <>
      <div className={styles['container-header']}>
        <Container>
          <Box className={styles['header-content']}>
            <Link href='/'>
              <a className={styles['logo-link']}>
                <img alt='Logo GamerApp' className={styles.logoDesktop} height="100%" src='/images/header/logo.svg' width={103} />
                <img alt='Logo GamerApp' className={styles.logoMobile} height="100%" src='/images/header/logo-green.png' width={103} />
              </a>
            </Link>

            <Box className={`${styles['search-text-container']} search-text-container`}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Box className={styles['icon-container']}>
                        <IconButton onClick={handleNavigate}>
                          <Search style={{ color: '#0dac3d', fontSize: 32 }} />
                        </IconButton>
                      </Box>
                    </InputAdornment>
                  ),
                }}
                className={styles['search-field']}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='Pesquise no GamerApp'
                value={search}
                variant='outlined'
              />
            </Box>

            <Box className={styles['menu-items']}>
              {menuSessions?.length > 0 && (
                <ButtonWithDropdown
                  icon='/images/header/cupom.svg'
                  sessions={menuSessions.map((menu) => ({
                    ...menu,
                    url: `/produtos/${menu.id}`,
                  }))}
                  title='Categorias'
                />
              )}

              <Link href={`/produtos/${PLAYSTATION_ID_SESSION}`}>
                <a className={`${styles['menu-item']} ${styles['is-link']}`}>
                  <Box height={20} position="relative" width={25}>
                    <Image alt='Playstation' src="/images/header/playstation.svg" priority objectFit="contain" layout="fill" />
                  </Box>

                  <Box marginEnd={1} marginStart={8}>
                    <Heading size={20}>Playstation</Heading>
                  </Box>
                </a>
              </Link>

              <Link href={`/produtos/${XBOX_ID_SESSION}`}>
                <a className={`${styles['menu-item']} ${styles['is-link']}`}>
                  <Box height={20} position="relative" width={25}>
                    <Image alt='Xbox' src="/images/header/xbox.svg" priority objectFit="contain" layout="fill" />
                  </Box>

                  <Box marginEnd={1} marginStart={8}>
                    <Heading size={20}>Xbox</Heading>
                  </Box>
                </a>
              </Link>
            </Box>

            <Box className={styles['hamburguer-wrapper']}>
              <Hamburguer opened={menuOpened} toggleOpened={() => setMenuOpened(!menuOpened)} />
            </Box>
          </Box>
        </Container>

        <Box className={`${styles['menu-items-mobile']} ${menuOpened ? styles.opened : ''}`}>
          {menuSessions.length > 0 && (
            <ButtonWithDropdown
              icon='/images/header/cupom.svg'
              sessions={menuSessions.map((menu) => ({
                ...menu,
                url: `/produtos/${menu.id}`,
              }))}
              title='Categorias'
              version='mobile'
            />
          )}

          <Link href={`/produtos/${PLAYSTATION_ID_SESSION}`}>
            <a className={`${styles['menu-item']} ${styles['is-link']}`}>
              <Box height={20} position="relative" width={25}>
                <Image alt='Playstation' src="/images/header/playstation.svg" priority objectFit="contain" layout="fill" />
              </Box>

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Playstation</Heading>
              </Box>
            </a>
          </Link>

          <Link href={`/produtos/${XBOX_ID_SESSION}`}>
            <a className={`${styles['menu-item']} ${styles['is-link']}`}>
              <Box height={20} position="relative" width={25}>
                <Image alt='Xbox' src="/images/header/xbox.svg" priority objectFit="contain" layout="fill" />
              </Box>

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Xbox</Heading>
              </Box>
            </a>
          </Link>
        </Box>
      </div>

      <Box className={`${styles['search-text-container']} ${styles['search-text-container-mobile']} search-text-container`}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Box className={styles['icon-container']}>
                  <IconButton onClick={handleNavigate}>
                    <Search style={{ color: '#0dac3d', fontSize: 32 }} />
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          }}
          className={styles['search-field']}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder='Pesquise no GamerApp'
          value={search}
          variant='outlined'
        />
      </Box>
    </>
  );
}
