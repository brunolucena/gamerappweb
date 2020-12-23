import Container from 'Components/Container';
import React, { useEffect } from 'react';
import SectionStore from 'Components/SectionStore';
import { loadBannersClear } from 'Modules/Loja/Store/Ducks/Banner';
import { loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { useDispatch } from 'react-redux';
import './styles.scss';

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
