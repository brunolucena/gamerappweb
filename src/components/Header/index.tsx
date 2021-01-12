import Box from 'components/Box';
import Container from 'components/Container';
import Hamburguer from 'components/Hamburguer';
import Heading from 'components/Heading';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import useIsMobile from 'helpers/useIsMobile';
import { useState } from 'react';
import './styles.scss';
// import ButtonWithDropdown from 'components/ButtonWithDropdown';
// import Search from '@material-ui/icons/Search';

const PLAYSTATION_ID_SESSION = 'a063ba2f-6b73-4484-92eb-5691a175f8b0';
const XBOX_ID_SESSION = '25da08dd-cc54-4daa-a535-345c4afc38d0';

const Header: React.FC = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const location = useLocation();
  // const { menuSessions } = useSelector((state: ReduxStore) => state.storeConfiguration);
  const [menuOpened, setMenuOpened] = useState(false);
  const [search, setSearch] = useState('');
  const isMobile = useIsMobile();

  const handleNavigate = () => {
    if (search) {
      // history.push({
      //   pathname: '/pesquisar',
      //   search: `?search=${search}`,
      // });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleNavigate();
      setSearch('');
    }
  };

  // useEffect(() => {
  //   dispatch(loadMenuConfiguration());
  // }, [dispatch]);

  // useEffect(() => {
  //   setMenuOpened(false);
  // }, [location]);

  return (
    <>
      <div className='container-header'>
        <Container>
          <Box className='header-content'>
            <Link href='/'>
              <a className="logo-link">
                <Image alt='Logo GamerApp' height="100%" priority src={isMobile ? '/header/logo-green.png' : '/header/logo.svg'} width={103} />
              </a>
            </Link>

            <Box className='search-text-container'>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Box className='icon-container'>
                        <IconButton onClick={handleNavigate}>
                          todo icon
                          {/* <Search style={{ color: '#0dac3d', fontSize: 32 }} /> */}
                        </IconButton>
                      </Box>
                    </InputAdornment>
                  ),
                }}
                className='search-field'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='Pesquise no GamerApp'
                value={search}
                variant='outlined'
              />
            </Box>

            <Box className='menu-items'>
              {/* {menuSessions.length > 0 && (
                <ButtonWithDropdown
                  icon={cupom}
                  sessions={menuSessions.map((menu) => ({
                    ...menu,
                    url: `/produtos/${menu.id}`,
                  }))}
                  title='Categorias'
                />
              )} */}

              <Link href={`/produtos/${PLAYSTATION_ID_SESSION}`}>
                <a className='menu-item is-link'>

                  <Image alt='Playstation' src="/header/playstation.svg" height={20} priority width="100%" />

                  <Box marginEnd={1} marginStart={8}>
                    <Heading size={20}>Playstation</Heading>
                  </Box>
                </a>
              </Link>

              <Link href={`/produtos/${XBOX_ID_SESSION}`}>
                <a className='menu-item is-link'>
                  <Image alt='Xbox' src="/header/xbox.svg" height={20} priority width="100%" />

                  <Box marginEnd={1} marginStart={8}>
                    <Heading size={20}>Xbox</Heading>
                  </Box>
                </a>
              </Link>
            </Box>

            <Box className='hamburguer-wrapper'>
              <Hamburguer opened={menuOpened} toggleOpened={() => setMenuOpened(!menuOpened)} />
            </Box>
          </Box>
        </Container>

        <Box className={`menu-items-mobile ${menuOpened ? 'opened' : ''}`}>
          {/* {menuSessions.length > 0 && (
            <ButtonWithDropdown
              icon={cupom}
              sessions={menuSessions.map((menu) => ({
                ...menu,
                url: `/produtos/${menu.id}`,
              }))}
              title='Categorias'
              version='mobile'
            />
          )} */}

          <Link href={`/produtos/${PLAYSTATION_ID_SESSION}`}>
            <a className='menu-item is-link'>

              <Image alt='Playstation' src="/header/playstation.svg" height={20} priority width="100%" />

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Playstation</Heading>
              </Box>
            </a>
          </Link>

          <Link href={`/produtos/${XBOX_ID_SESSION}`}>
            <a className='menu-item is-link'>

              <Image alt='Xbox' src="/header/xbox.svg" height={20} priority width="100%" />

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Xbox</Heading>
              </Box>
            </a>
          </Link>
        </Box>
      </div>

      <Box className='search-text-container search-text-container-mobile'>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Box className='icon-container'>
                  <IconButton onClick={handleNavigate}>
                    todo icon
                    {/* <Search style={{ color: '#0dac3d', fontSize: 32 }} /> */}
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          }}
          className='search-field'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder='Pesquise no GamerApp'
          value={search}
          variant='outlined'
        />
      </Box>
    </>
  );
};

export default Header;
