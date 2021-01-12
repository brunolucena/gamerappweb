import Box from 'components/Box';
import Facebook from 'components/SocialMedia/Facebook';
import Heading from 'components/Heading';
import Image from 'next/image';
import Instagram from 'components/SocialMedia/Instagram';
import LinkedIn from 'components/SocialMedia/LinkedIn';
import Logo from 'components/Logo';
import styles from './styles.module.scss';
import Text from 'components/Text';
import Youtube from 'components/SocialMedia/Youtube';
import Link from 'next/link';

const Footer: React.FC = () => {
  // const { menuSessions: menuSessionsRedux } = useSelector((state: ReduxStore) => state.storeConfiguration);

  // const menuSessions = menuSessionsRedux.slice(0, 2);

  return (
    <Box className={styles['footer-wrapper']}>
      <Box className={styles['footer-container']}>
        <Box direction='column' display='flex' gap={50}>
          <Link href='/'>
            <a>
              <Logo variant='block-green-gray' width={150} />
            </a>
          </Link>

          <Box alignItems='center' display='flex' gap={10}>
            <Facebook color='white' link='https://www.facebook.com/baixegamerapp' width={30} />
            <Instagram color='white' link='https://www.instagram.com/baixegamerapp/' width={30} />
            <Youtube color='white' link='https://www.youtube.com/channel/UCE426J_NLjT7BOBSxWuk0ig' width={30} />
            <LinkedIn color='white' link='https://www.linkedin.com/company/gamerapp/' width={30} />
          </Box>

          <a href='https://play.google.com/store/apps/details?id=com.weevolvegamerapp' rel='noopener noreferrer' target='_blank'>
            <Image alt='disponível no google play' src='/images/footer/disponivel_google_play.png' objectFit="contain" height="100%" width={150} />
          </a>
        </Box>

        <Box direction='column' display='flex' gap={40}>
          <Heading color='white' size={20}>
            Acelerados por
          </Heading>

          <Box>
            <Box alignItems='center' display='flex' gap={20} marginBottom={30}>
              <a
                href='https://www.inovativabrasil.com.br/wp-content/uploads/2020/11/Encarte-Experience-Dezembro-2020.pdf'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image alt='Acelerada Inovativa Brasil 2020' src='/images/footer/acelerada_inovativa_brasil_2020.png' objectFit="contain" width={120} height="100%" />
              </a>

              <a href='https://www.inovaunigran.com.br' rel='noopener noreferrer' target='_blank'>
                <Image alt='Aceleradora Inova Unigran' src='/images/footer/aceleradora_inova_unigran.png' objectFit="contain" width={120} height="100%" />
              </a>
            </Box>

            <a href='https://capitalempreendedor2020.com.br/startup-gamerapp' rel='noopener noreferrer' target='_blank'>
              <Image alt='Capital Empreendedor Sebrae' src='/images/footer/capital_empreendedor_sebrae.png' objectFit="contain" width={260} height="100%" />
            </a>
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={25}>
          <Heading color='white' size={20}>
            Menu
          </Heading>

          <Box direction='column' display='flex' gap={15}>
            <Link href='/'>
              <a>
                <Text color='white'>Home</Text>
              </a>
            </Link>

            {/* {menuSessions.map((menu, index) => (
              <Link key={menu.id + index} href={`/produtos/${menu.id}`}>
                <a>
                  <Text color='white'>{menu.title}</Text>
                </a>
              </Link>
            ))} */}

            <Link href='/terms-of-use'>
              <a>
                <Text color='white'>Termos de Uso</Text>
              </a>
            </Link>

            <Link href='/privacy-policy'>
              <a>
                <Text color='white'>Política de Privacidade</Text>
              </a>
            </Link>
          </Box>
        </Box>

        <Box direction='column' display='flex' gap={30}>
          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={20}>
              Contato
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Text color='white'>contato@gamerapp.com.br</Text>

              <Text color='white'>Whatsapp: (11) 97045-3206</Text>
            </Box>
          </Box>

          <Box direction='column' display='flex' gap={15}>
            <Heading color='white' size={20}>
              Suporte
            </Heading>

            <Box direction='column' display='flex' gap={15}>
              <Text color='white'>suporte@gamerapp.com.br</Text>

              <Text color='white'>Whatspp: (67) 99238-3662</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={styles.disclaimer}>
        <Text align='center' color='lightGray'>
          © 2020 - GamerApp Companhia Tecnológica LTDA CNPJ n.º 34.425.831/0001-27 - Todos os direitos reservados
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
