import Container from 'Components/Container';
import ContentSlider, { Item } from 'Components/ContentSlider';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const items: Array<Item> = [
    {
      id: '1',
      url: 'https://olhardigital.com.br/wp-content/uploads/2020/09/20200925024455.jpg',
    },
    {
      id: '2',
      url: 'https://images8.alphacoders.com/710/thumb-1920-710329.jpg',
    },
    {
      id: '3',
      url: 'https://deathstrandingpc.505games.com/wp-content/themes/deathstranding/img/topimage.jpg',
    },
  ];

  useEffect(() => {
    // TODO: get product details
    // dispatch(getProductDetails({id}));

    console.log({ id });
  }, []);

  return (
    <div className='product-details-container'>
      <Container>
        <div className='content'>
          <div className='left'>
            <ContentSlider items={items} itemsOnScreen={1} />
          </div>

          <div className='right'></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
