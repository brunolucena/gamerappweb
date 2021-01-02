import BackButton from 'Components/BackButton';
import Box from 'Components/Box';
import Container from 'Components/Container';
import React, { useEffect } from 'react';
import SectionStore from 'Components/SectionStore';
import { loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { logEvent } from 'Utils/Firebase';
import { useDispatch } from 'react-redux';
import './styles.scss';

interface Props {
  sessionId?: any;
  title?: string;
  searchText?: any;
}

const Products: React.FC<Props> = ({ sessionId, title, searchText }) => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(searchText?.location.search);
  const searchTextParams = params.get('search');

  useEffect(() => {
    dispatch(loadBannersClear());
    dispatch(loadSessionClear());
  }, [dispatch, searchText, sessionId]);

  useEffect(() => {
    if (searchTextParams) {
      logEvent('search', { search_term: searchTextParams });
    }
  }, [searchTextParams]);

  return (
    <div className='products-container'>
      <Box position='absolute' top={110} bottom={5} left={0} right={0}>
        <BackButton fontSize={28} iconColor='#999' />
      </Box>

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
