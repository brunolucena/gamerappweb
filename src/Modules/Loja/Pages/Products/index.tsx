import Container from 'Components/Container';
import ContentSlider from 'Components/ContentSlider';
import { loadConfiguration } from 'Modules/Loja/Store/Ducks/Configuration';
import { loadBanners, loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import CardStore from 'Components/CardStore';
import SectionStore from 'Components/SectionStore';
import './styles.scss';

interface Props {
  sessionId?: any,
  title?: string,
  searchText?: any
}

const Products: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { sessionId, title, searchText } = props;
  const params = new URLSearchParams(searchText?.location.search);
  const searchTextParams = params.get('search');

  useEffect(() => {
    dispatch(loadBannersClear())
    dispatch(loadSessionClear())
  }, [searchText || sessionId]);

  return (
    <div className='home-container'>
      <Container>
        <p>{title}</p>
        <SectionStore 
          sessionId={sessionId?.match.params.id} 
          searchText={searchTextParams} 
          title={title} 
          isAllItems={false}
          isAllItemsBottom={true}
        />
      </Container>
    </div>
  );
};

export default Products;
