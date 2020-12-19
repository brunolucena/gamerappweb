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

  const { about, copyright, description, images, link, platforms, price, storeName, storeLogoUrl, title } = storeProductDetails;

  const items: Item[] = images?.map((image) => ({ sessionId: '', imageUrl: image })) ?? [];

  useEffect(() => {
    dispatch(loadProductDetails({ id }));
  }, [dispatch, id]);

  return (
    <Box backgroundColor='#f8f8f8' className='product-details-container' minHeight='calc(100vh - 70px)'>
      <Container>
        <Box display='grid' gap={30} gridTemplateColumns='2fr 1fr' paddingTop={60} paddingBottom={60}>
          <Box display='flex' direction='column'>
            <ContentSlider insideArrows items={items} itemsOnScreen={1} />

            <Box direction='column' display='flex'>
              <Box marginBottom={30} marginTop={30}>
                <Heading weight='bold'>Sobre o jogo</Heading>
              </Box>

              <Text color='gray' size={18}>
                {description}
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
              <Box
                alignItems='center'
                backgroundColor='#fcfcfc'
                borderColor='lightGray'
                borderStyle={1}
                borderRadius={5}
                display='flex'
                paddingTop={10}
                paddingBottom={10}
                paddingLeft={15}
                paddingRight={15}
              >
                <Text size={18}>Tempo restante:</Text>

                <Box marginStart={3}>
                  <Countdown
                    date={Date.now() + 10000}
                    renderer={(props) => {
                      console.log({ props });

                      return <Text size={18}>00</Text>;
                    }}
                  />
                </Box>
              </Box>

              <Box marginBottom={12} marginTop={12}>
                <Heading>{title}</Heading>
              </Box>

              <Text color='gray'>{about}</Text>

              <Box alignItems='center' display='flex' gap={20} marginTop={24} marginBottom={30}>
                <Box borderColor='green' borderStyle={1} paddingTop={8} paddingBottom={8} paddingLeft={8} paddingRight={8}>
                  <Heading align='center' color='green' size={28}>
                    -{price.discountPercent}%
                  </Heading>
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

                <Box marginTop={5}>
                  {platforms.map((platform, index) => {
                    const { id, imageUrl, platformName } = platform;

                    return (
                      <Box alignItems='center' display='flex' gap={8} key={id + index} marginBottom={10}>
                        {imageUrl && <img src={imageUrl} alt={platformName} />}

                        <Text>{platformName}</Text>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <Box alignItems='end' className='right' display='flex' direction='column' gap={3}>
                <Text size={14}>Vendido por</Text>

                <Box marginTop={5}>
                  {storeLogoUrl ? <img alt={storeName} src={storeLogoUrl} height={25} width='100%' /> : <Text>{storeName}</Text>}
                </Box>
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
  );
};

export default ProductDetails;
