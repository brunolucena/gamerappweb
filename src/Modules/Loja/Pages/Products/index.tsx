import Container from 'Components/Container';
import React, { useEffect } from 'react';
import SectionStore from 'Components/SectionStore';
import { loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { useDispatch } from 'react-redux';
import './styles.scss';
import Box from 'Components/Box';
import BackButton from 'Components/BackButton';
import { Link } from 'react-router-dom';

interface Props {
  sessionId?: any;
  title?: string;
  searchText?: any;
}

const Products: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { sessionId, title, searchText } = props;
  const params = new URLSearchParams(searchText?.location.search);
  const searchTextParams = params.get('search');

  useEffect(() => {
    dispatch(loadBannersClear());
    dispatch(loadSessionClear());
  }, [searchText || sessionId]);

  return (
    <div className='products-container'>
      <Box position='absolute' top={110} bottom={5} left={0} right={0}>
          <BackButton fontSize={28} iconColor='#999'/>
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
