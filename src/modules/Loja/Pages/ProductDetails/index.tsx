import Alarm from '@material-ui/icons/Alarm';
import BackButton from 'components/BackButton';
import Box from 'components/Box';
import Container from 'components/Container';
import ContentSlider from 'components/ContentSlider';
import Countdown from 'react-countdown';
import Heading from 'components/Heading';
import styles from './styles.module.scss';
import Text from 'components/Text';
import { BannerModel } from 'modules/Loja/Store/Banner/models';
import { event } from 'lib/gtag';
import { formatCurrency } from 'helpers/formatters';
import { logEvent } from 'lib/Firebase';
import { ProductModel } from 'modules/Loja/Lib/ProductDetails/models';
import { useGetExperimentVariant } from 'lib/GoogleOptimize';

interface Props {
  productDetails: ProductModel;
}

export default function ProductDetails({ productDetails }: React.PropsWithChildren<Props>) {
  const { enabled: buttonComprarExperimentEnabled } = useGetExperimentVariant({
    activationEvent: 'optimize.activate.button_comprar_experiment',
    experimentId: 'zdECmV5gR62CkMfiw_zj0w',
  });

  const buttonLabel = buttonComprarExperimentEnabled ? 'Ver no site' : 'Comprar';

  const {
    about,
    copyright,
    description,
    images,
    isAvailable,
    link,
    offerValidUntil,
    platforms,
    price,
    storeName,
    storeLogoUrl,
    title,
  } = productDetails;

  const items: BannerModel[] = images?.map((image) => ({ sessionId: '', imageUrl: image })) ?? [];

  const onClick = () => {
    event({
      action: 'BUTTON_COMPRAR_CLICK',
      category: 'PRODUCT',
      label: buttonLabel,
    });

    logEvent('BUTTON_COMPRAR_CLICK', {
      label: buttonLabel,
      link,
      price: JSON.stringify(price),
      storeName,
      title,
    });
  };

  const contentslider = <ContentSlider insideArrows items={items} slidesToShow={1} />;

  const countdown = (
    <Countdown
      date={offerValidUntil}
      renderer={({ completed, formatted }) => {
        const { days, hours, minutes, seconds } = formatted;

        return (
          !completed && (
            <Box className={styles.countdown}>
              <Box className={styles['alarm-wrapper']}>
                <Box className={styles.alarm}>
                  <Alarm style={{ color: '#0dac3d', fontSize: 32 }} />
                </Box>
                <Box className={styles['alarm-mobile']}>
                  <Alarm style={{ color: '#0dac3d', fontSize: 25 }} />
                </Box>
              </Box>

              <Text className={styles.text}>Tempo restante:</Text>

              <Box marginStart={3}>
                <Text className={styles.time}>
                  {days !== '00' ? `${days}d` : ''} {hours}:{minutes}:{seconds}
                </Text>
              </Box>
            </Box>
          )
        );
      }}
    />
  );

  const activation = (
    <Box marginTop={5}>
      {platforms.map((platform, index) => {
        const { id, imageUrl, platformName } = platform;

        return (
          <Box alignItems='center' display='flex' gap={8} key={id + index} marginBottom={10}>
            {imageUrl && <img alt={platformName} src={imageUrl} style={{ height: '100%', width: 20 }} />}

            <Text>{platformName}</Text>
          </Box>
        );
      })}
    </Box>
  );

  const sold = (
    <Box marginTop={5}>{storeLogoUrl ? <img alt={storeName} src={storeLogoUrl} width={100} /> : <Text>{storeName}</Text>}</Box>
  );

  const gameprice = (
    <Box className={styles['game-price']} marginTop={!price.oldPrice ? 21 : 24} marginBottom={30}>
      {!!price.discountPercent && (
        <Box borderColor='green' borderStyle={1} className={styles['discount-container']}>
          <Box className={styles.discount}>
            <Heading className={styles['discount-wrapper']}>-{price.discountPercent}%</Heading>
          </Box>

          <Box className={styles['discount-mobile']}>
            <Heading className={styles['discount-wrapper-mobile']}>-{price.discountPercent}%</Heading>
          </Box>
        </Box>
      )}

      <Box display='flex' direction='column'>
        {!!price.oldPrice && (
          <Box left={2} position='relative'>
            <Text color='lightGray' lineThrough size={12}>
              {formatCurrency(price.oldPrice)}
            </Text>
          </Box>
        )}

        {isAvailable ? (
          <Heading className={styles.price}>{price.price ? formatCurrency(price.price) : 'Gratuito'}</Heading>
        ) : (
            <Text weight='bold'>Indisponível</Text>
        )}
      </Box>
    </Box>
  );

  const disclaimer = (
    <p>Disclaimer: os preços podem sofrer variação nos sites dos nossos parceiros, bem como a validade e vigência de promoções</p>
  );
  return (
    <Box className={styles['product-details-wrapper']}>
      <Box backgroundColor='#f8f8f8' className={styles['product-details-container']} minHeight='calc(100vh - 70px)'>
        <Container>
          <Box display='grid' gap={30} gridTemplateColumns='2fr 1fr' paddingTop={64} paddingBottom={60}>
            <Box display='flex' direction='column'>
              {contentslider}

              {about && (
                <Box direction='column' display='flex'>
                  <Box marginBottom={30} marginTop={30}>
                    <Heading weight='bold'>Sobre o jogo</Heading>
                  </Box>

                  <Text color='gray' size={18}>
                    {about}
                  </Text>
                </Box>
              )}
            </Box>

            <Box>
              <Box
                backgroundColor='#ffffff'
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
                paddingTop={15}
                paddingBottom={15}
                paddingLeft={30}
                paddingRight={30}
              >
                {countdown}

                <Box marginBottom={8} marginTop={26}>
                  <Heading size={28}>{title}</Heading>
                </Box>

                {description && <Text color='gray'>{description}</Text>}

                {gameprice}

                {isAvailable && (
                  <Box marginTop={30} marginBottom={15}>
                    <a className={styles['link-button']} href={link} onClick={onClick} rel='noopener noreferrer' target='_blank'>
                      <Heading align='center' className={styles['button-text']} color='white' size={20}>
                        {buttonLabel}
                      </Heading>
                    </a>
                  </Box>
                )}
              </Box>

              <Box
                backgroundColor='#f0f0f0'
                borderBottomRightRadius={10}
                borderBottomLeftRadius={10}
                className={styles.bottom}
                display='flex'
                justifyContent='between'
                paddingTop={15}
                paddingBottom={15}
                paddingLeft={30}
                paddingRight={30}
              >
                <Box display='flex' direction='column' gap={3}>
                  <Text size={14}>Ativação e sistemas</Text>
                  {activation}
                </Box>

                <Box alignItems='end' className={styles.right} display='flex' direction='column' gap={3}>
                  <Text size={14}>Vendido por</Text>
                  <a
                    href={'https://www.awin1.com/cread.php?awinmid=17811&awinaffid=797361&ued=https%3A%2F%2Fwww.nuuvem.com%2F'}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {sold}
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box paddingBottom={50}>
            <Box>
              <Text color='lightGray'>{disclaimer}</Text>
            </Box>

            {copyright && (
              <Box marginTop={10}>
                <Text color='lightGray'>{copyright}</Text>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <Box className={styles['product-details-mobile']}>
        <Box display='flex' direction='column' backgroundColor='#ffffff' paddingBottom={90}>
          <Box position='relative' backgroundColor='#ffffff'>
            <Box backgroundColor='#00000026' position='absolute' top={0} bottom={5} left={0} right={0}>
              <BackButton fontSize={28} iconColor='#ffffff' />
            </Box>

            {items[0] && <img src={items[0].imageUrl} alt={items[0].sessionId} width='100%' />}
          </Box>

          <Box paddingLeft={15} paddingRight={95} paddingTop={8}>
            {countdown}
          </Box>

          <Box paddingLeft={15} paddingRight={15} paddingTop={11} paddingBottom={10}>
            <div className={styles['game-title']}>{title}</div>

            {description && (
              <Box marginTop={10} marginBottom={5}>
                <Text color='gray'>{description}</Text>
              </Box>
            )}
          </Box>

          <Box
            backgroundColor='#f0f0f0'
            className={styles.bottom}
            display='flex'
            justifyContent='between'
            paddingTop={15}
            paddingBottom={15}
            paddingLeft={15}
            paddingRight={15}
          >
            <Box display='flex' direction='column' gap={3}>
              <Text size={12}>Ativação e sistemas</Text>
              {activation}
            </Box>

            <Box display='flex' direction='column' gap={3}>
              <Text size={12}>Vendido por</Text>
              <a
                href={'https://www.awin1.com/cread.php?awinmid=17811&awinaffid=797361&ued=https%3A%2F%2Fwww.nuuvem.com%2F'}
                rel='noopener noreferrer'
                target='_blank'
              >
                {sold}
              </a>
            </Box>
          </Box>

          <Box paddingLeft={15} paddingRight={15}>
            {gameprice}
          </Box>

          <Box paddingLeft={15} paddingRight={15} backgroundColor='#ffffff'>
            <Box marginBottom={10} marginTop={20}>
              <Heading weight='bold' size={20}>
                Sobre o jogo
              </Heading>
            </Box>

            <Box>
              <Text color='gray' size={14}>
                {about || 'Nenhum detalhes disponível...'}
              </Text>

              <Box marginTop={10}>
                <Text color='lightGray' size={12}>
                  {disclaimer}
                </Text>
              </Box>

              {copyright && (
                <Box marginBottom={10} marginTop={10}>
                  <Text color='lightGray' size={12}>
                    {copyright}
                  </Text>
                </Box>
              )}
            </Box>
          </Box>

          <Box className={styles['button-wrapper']}>
            <a className={styles['link-button']} href={link} onClick={onClick} rel='noopener noreferrer' target='_blank'>
              <Text align='center' className={styles['button-text']} color='white' size={16} weight='bold'>
                {buttonLabel}
              </Text>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
