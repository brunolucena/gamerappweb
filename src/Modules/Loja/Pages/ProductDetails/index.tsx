import Alarm from '@material-ui/icons/Alarm';
import Box from 'Components/Box';
import Button from 'Components/Button';
import Container from 'Components/Container';
import ContentSlider, { Item } from 'Components/ContentSlider';
import Countdown from 'react-countdown';
import Heading from 'Components/Heading';
import React, { useEffect } from 'react';
import Text from 'Components/Text';
import { formatCurrency } from 'Helpers/formatters';
import { loadProductDetails } from 'Modules/Loja/Store/Ducks/ProductDetails';
import { ReduxStore } from 'Store/Redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss';

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { storeProductDetails } = useSelector((state: ReduxStore) => state);

  const {
    about,
    copyright,
    description,
    images,
    link,
    offerValidUntil,
    platforms,
    price,
    storeName,
    storeLogoUrl,
    title,
  } = storeProductDetails;

  const items: Item[] = images?.map((image) => ({ sessionId: '', imageUrl: image })) ?? [];

  useEffect(() => {
    dispatch(loadProductDetails({ id }));
  }, [dispatch, id]);

  const contentslider = <ContentSlider insideArrows items={items} itemsOnScreen={1} />;
  const countdown = (
    <Countdown
      date={offerValidUntil}
      renderer={({ completed, formatted }) => {
        const { days, hours, minutes, seconds } = formatted;

        return (
          !completed && (
            <Box className='countdown'>
              <Box className='alarm-wrapper'>
                <Box className='alarm'>
                  <Alarm style={{ color: '#0dac3d', fontSize: 32 }} />
                </Box>
                <Box className='alarm-mobile'>
                  <Alarm style={{ color: '#0dac3d', fontSize: 25 }} />
                </Box>
              </Box>

              <Text className='text'>Tempo restante:</Text>

              <Box marginStart={3}>
                <Text className='time'>
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
    <Box marginTop={5}>
      {storeLogoUrl ? <img alt={storeName} src={storeLogoUrl} height={25} width='100%' /> : <Text>{storeName}</Text>}
    </Box>
  );

  const gameprice = (
    <Box className='game-price'>
      <Box borderColor='green' borderStyle={1} paddingTop={8} paddingBottom={8} paddingLeft={8} paddingRight={8}>
        <div className='discount'>
          <Heading className='discount-wrapper'>-{price.discountPercent}%</Heading>
        </div>
        <div className='discount-mobile'>
          <Heading className='discount-wrapper-mobile'>-{price.discountPercent}%</Heading>
        </div>
      </Box>

      <Box display='flex' direction='column'>
        {price.oldPrice && (
          <Box left={2} position='relative'>
            <Text color='lightGray' lineThrough size={12}>
              {formatCurrency(price.oldPrice)}
            </Text>
          </Box>
        )}

        <Heading className='price'>{formatCurrency(price.price)}</Heading>
      </Box>
    </Box>
  );
  return (
    <>
      <Box backgroundColor='#f8f8f8' className='product-details-container' minHeight='calc(100vh - 70px)'>
        <Container>
          <Box display='grid' gap={30} gridTemplateColumns='2fr 1fr' paddingTop={60} paddingBottom={60}>
            <Box display='flex' direction='column'>
              {contentslider}

              <Box direction='column' display='flex'>
                <Box marginBottom={30} marginTop={30}>
                  <Heading weight='bold'>Sobre o jogo</Heading>
                </Box>

                <Text color='gray' size={18}>
                  {about}
                </Text>
              </Box>
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
                  <Heading>{title}</Heading>
                </Box>

                {description && <Text color='gray'>{description}</Text>}

                {gameprice}

                <Box marginTop={30} marginBottom={15}>
                  <Button external to={link}>
                    <Heading align='center' className='button-text' color='white' size={20}>
                      Comprar
                    </Heading>
                  </Button>
                </Box>
              </Box>

              <Box
                backgroundColor='#f0f0f0'
                borderBottomRightRadius={10}
                borderBottomLeftRadius={10}
                className='bottom'
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

                <Box alignItems='end' className='right' display='flex' direction='column' gap={3}>
                  <Text size={14}>Vendido por</Text>
                  {sold}
                </Box>
              </Box>
            </Box>
          </Box>

          {copyright && (
            <Box marginTop={40}>
              <Text color='lightGray'>{copyright}</Text>
            </Box>
          )}
        </Container>
      </Box>
      <Box className='product-details-mobile'>
        <Box display='flex' direction='column' backgroundColor='#ffffff'>
          <Box paddingLeft={15} paddingRight={95} paddingTop={5}>
            {countdown}
          </Box>
          <Box paddingLeft={15} paddingRight={15} paddingTop={15} paddingBottom={10}>
            <div className='game-title'>{title}</div>
            {description && (
              <Box marginTop={10} marginBottom={5}>
                <Text color='gray'>{description}</Text>
              </Box>
            )}
          </Box>
          <Box
            backgroundColor='#f0f0f0'
            className='bottom'
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

            <Box alignItems='end' display='flex' direction='column' gap={3}>
              <Text size={12}>Vendido por</Text>
              {sold}
            </Box>
          </Box>
          <Box paddingLeft={15} paddingRight={15}>
            {gameprice}
          </Box>

          <Box paddingLeft={15} paddingRight={15} backgroundColor='#ffffff'>
            <Box marginBottom={10} marginTop={10}>
              <Heading weight='bold' size={20}>
                Sobre o jogo
              </Heading>
            </Box>
            <Box>
              <Text color='gray' size={14}>
                {about}
              </Text>
              {copyright && (
                <Box marginTop={25} marginBottom={90}>
                  <Text color='lightGray'>{copyright}</Text>
                </Box>
              )}
            </Box>
          </Box>
          <Box className='button-wrapper'>
            <Button external to={link}>
              <Text align='center' className='button-text' color='white' size={14}>
                Comprar
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
