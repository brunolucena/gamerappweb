import Box from 'Components/Box';
import Container from 'Components/Container';
import cupom from './cupom.svg';
import Hamburguer from 'Components/Hamburguer';
import Heading from 'Components/Heading';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import logo from './logo.svg';
import playstation from './playstation.svg';
import React, { useEffect, useState } from 'react';
import Search from '@material-ui/icons/Search';
import Text from 'Components/Text';
import TextField from '@material-ui/core/TextField';
import xbox from './xbox.svg';
import { Link, useHistory } from 'react-router-dom';
import { loadMenuConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import { ReduxStore } from 'Store/Redux';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const PLAYSTATION_ID_SESSION = 'a063ba2f-6b73-4484-92eb-5691a175f8b0';
const XBOX_ID_SESSION = '25da08dd-cc54-4daa-a535-345c4afc38d0';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menuSessions } = useSelector((state: ReduxStore) => state.storeConfiguration);
  const [menuOpened, setMenuOpened] = useState(false);
  const [search, setSearch] = useState('');

  const handleNavigate = () => {
    if (search) {
      history.push({
        pathname: '/pesquisar',
        search: `?search=${search}`,
      });
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
    dispatch(loadMenuConfiguration());
  }, [dispatch]);

  return (
    <div className='container-header'>
      <Container>
        <Box className='header-content'>
          <Link className='logo-link' to='/'>
            <img alt='Logo GamerApp' src={logo} style={{ width: 103 }} />
          </Link>

          <Box className='search-text-container'>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Box className='icon-container'>
                      <IconButton onClick={handleNavigate}>
                        <Search style={{ color: '#0dac3d', fontSize: 32 }} />
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
            {menuSessions.length > 0 && (
              <button className='menu-item'>
                <img alt='Categorias' src={cupom} style={{ height: 20 }} />

                <Box marginEnd={1} marginStart={8}>
                  <Heading size={20}>Categorias</Heading>
                </Box>

                <KeyboardArrowDown style={{ color: '#343434', fontSize: 24 }} />

                <Box className='menu-item-dropdown' borderRadius={5} borderStyle='shadow'>
                  {menuSessions.map((menu, index) => {
                    return (
                      <Link className='menu-item-dropdown-item' key={menu.id + index} to={`/produtos/${menu.id}`}>
                        <Text size={18} weight='semi-bold'>
                          {menu.title}
                        </Text>
                      </Link>
                    );
                  })}
                </Box>
              </button>
            )}

            <Link className='menu-item is-link' to={`/produtos/${PLAYSTATION_ID_SESSION}`}>
              <img alt='Playstation' src={playstation} style={{ height: 20 }} />

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Playstation</Heading>
              </Box>
            </Link>

            <Link className='menu-item is-link' to={`/produtos/${XBOX_ID_SESSION}`}>
              <img alt='Xbox' src={xbox} style={{ height: 20 }} />

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Xbox</Heading>
              </Box>
            </Link>
          </Box>

          <Box className='hamburguer-wrapper'>
            <Hamburguer opened={menuOpened} toggleOpened={() => setMenuOpened(!menuOpened)} />
          </Box>
        </Box>
      </Container>

      <Box className={`menu-items-mobile ${menuOpened ? 'opened' : ''}`}>
        {menuSessions.length > 0 && (
          <>
            <button className='menu-item'>
              <img alt='Categorias' src={cupom} style={{ height: 20 }} />

              <Box marginEnd={1} marginStart={8}>
                <Heading size={20}>Categorias</Heading>
              </Box>

              <KeyboardArrowDown style={{ color: '#343434', fontSize: 24 }} />
            </button>

            <Box className='menu-item-dropdown-mobile' borderRadius={5} borderStyle='shadow'>
              {menuSessions.map((menu, index) => {
                return (
                  <Link className='menu-item-dropdown-item' key={menu.id + index} to={`/produtos/${menu.id}`}>
                    <Text size={18} weight='semi-bold'>
                      {menu.title}
                    </Text>
                  </Link>
                );
              })}
            </Box>
          </>
        )}

        <Link className='menu-item is-link' to={`/produtos/${PLAYSTATION_ID_SESSION}`}>
          <img alt='Playstation' src={playstation} style={{ height: 20 }} />

          <Box marginEnd={1} marginStart={8}>
            <Heading size={20}>Playstation</Heading>
          </Box>
        </Link>

        <Link className='menu-item is-link' to={`/produtos/${XBOX_ID_SESSION}`}>
          <img alt='Xbox' src={xbox} style={{ height: 20 }} />

          <Box marginEnd={1} marginStart={8}>
            <Heading size={20}>Xbox</Heading>
          </Box>
        </Link>
      </Box>
    </div>
  );
};

export default Header;
