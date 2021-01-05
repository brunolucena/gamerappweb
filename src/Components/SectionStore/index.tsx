import CardStore from 'Components/CardStore';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
import { ReduxStore } from 'Store/Redux';
import { search, searchClear } from 'Modules/Loja/Store/Ducks/Search';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import EmptyScreen from 'Modules/Loja/Components/EmptyScreen';
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
  const { items: itemSession, name, count } = useSelector((state: ReduxStore) => state.storeSession);
  const { items: itemsSearch, loading } = useSelector((state: ReduxStore) => state.storeSearch);
  const [dateHours] = useState(moment());
  const [quantity, setQuantity] = useState(10);

  useEffect(() => {
    dispatch(loadSessionClear());
    dispatch(searchClear());

    sessionId && !searchText && dispatch(loadSession({ sessionId: sessionId, quantity: quantity }));
    !sessionId && searchText && dispatch(search({ searchText: searchText, quantity: 50, page: 1 }));
  }, [dispatch, sessionId, searchText, quantity]);

  const isEmpty = !loading && itemsSearch.length === 0;

  console.log({ isEmpty });

  return (
    <div className='containerSectionStore'>
      {!isEmpty ? (
        <>
          <div className='header'>
            {title && <p>{title}</p>}

            {name && !title && <p className='title'>{name}</p>}

            {isAllItems && (
              <Link className='ver-tudo' to={`/produtos/${sessionId}`}>
                Ver tudo
              </Link>
            )}
          </div>

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
        </>
      ) : (
        <div className='empty'>
          <EmptyScreen text='404 - Houston, temos um problema nessa página!' />
        </div>
      )}

      <div className='footer'>
        {isAllItemsBottom && count > quantity && (
          <>
            <button type='button' onClick={() => setQuantity(quantity + 10)}>
              Ver mais
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionStore;
