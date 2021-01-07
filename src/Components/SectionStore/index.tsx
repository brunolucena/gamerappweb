import CardStore from 'Components/CardStore';
import EmptyScreen from 'Modules/Loja/Components/EmptyScreen';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { ReduxStore } from 'Store/Redux';
import { search, searchClear } from 'Modules/Loja/Store/Ducks/Search';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
var _ = require('lodash');

interface Props {
  sessionId?: string;
  title?: string;
  isAllItems?: boolean;
  isAllItemsBottom?: boolean;
  searchText?: string | null;
}

const SectionStore: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { sessionId, title, isAllItems = true, isAllItemsBottom, searchText } = props;
  const { count, items: itemSession, loaded: loadedSession, loading: loadingSession, name } = useSelector(
    (state: ReduxStore) => state.storeSession
  );
  const { items: itemsSearch, loaded: loadedSearch, loading: loadingSearch } = useSelector(
    (state: ReduxStore) => state.storeSearch
  );
  const [dateHours] = useState(moment());
  const [loadingPage, setLoadingPage] = useState(true);
  const [quantity, setQuantity] = useState(10);

  const isSession = sessionId && !searchText;

  useEffect(() => {
    dispatch(loadSessionClear());
    dispatch(searchClear());

    isSession && dispatch(loadSession({ sessionId: sessionId ?? '', quantity: quantity }));
    !isSession && dispatch(search({ searchText: searchText ?? '', quantity: 50, page: 1 }));

    setLoadingPage(false);
  }, [dispatch, isSession, sessionId, searchText, quantity]);

  const loaded = isSession ? loadedSession : loadedSearch;
  const loading = loadingPage || (isSession ? loadingSession : loadingSearch) || !loaded;

  const header = title || name || searchText;
  const isEmpty = loaded && (isSession ? itemSession.length === 0 : itemsSearch.length === 0);

  return loading ? (
    <div className='containerSectionStore loading'></div>
  ) : (
    <div className='containerSectionStore'>
      <div className='header'>
        <div />

        <p className='title'>{header}</p>

        <div className='link-container'>
          {isAllItems && (
            <Link className='ver-tudo' to={`/produtos/${sessionId}`}>
              Ver tudo
            </Link>
          )}
        </div>
      </div>

      {!isEmpty ? (
        <div className='body'>
          {sessionId &&
            itemSession &&
            _.groupBy(itemSession, 'sessionId')[sessionId]?.map((item: any) => {
              return (
                <CardStore
                  id={item.id}
                  banner={item.imageUrl}
                  title={item.name}
                  discount={item.price?.discountPercent}
                  value={item.price.price}
                  oldPrice={item.price.oldPrice}
                  platform={item.platforms}
                  duration={item.offerValidUntil}
                  pay={item.url}
                  dateHourNow={dateHours}
                />
              );
            })}

          {searchText &&
            itemsSearch &&
            itemsSearch?.map((item: any) => {
              return (
                <CardStore
                  id={item.id}
                  banner={item.imageUrl}
                  title={item.name}
                  discount={item.price?.discountPercent}
                  value={item.price.price}
                  platform={item.platforms}
                  oldPrice={item.price.oldPrice}
                  duration={item.offerValidUntil}
                  pay={item.url}
                  dateHourNow={dateHours}
                />
              );
            })}
        </div>
      ) : (
        <div className='empty'>
          <EmptyScreen text='Puxa, não achei nenhum resultado nesta busca =/' />
        </div>
      )}

      <div className='footer'>
        {isAllItemsBottom && count > quantity && (
          <button type='button' onClick={() => setQuantity(quantity + 10)}>
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionStore;
