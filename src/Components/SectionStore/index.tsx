import Button from 'Components/Button';
import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import { loadSession } from 'Modules/Loja/Store/Ducks/Session';
import { search } from 'Modules/Loja/Store/Ducks/Search';
import CardStore from 'Components/CardStore';
import { useHistory } from 'react-router-dom';
var _ = require('lodash');

interface Props {
  sessionId?: string;
  title?: string;
  isAllItems?: boolean;
  isAllItemsBottom?: boolean;
  searchText?: string | null;
}

const SectionStore: React.FC<Props> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sessionId, title, isAllItems = true, isAllItemsBottom, searchText } = props;
  const { items } = useSelector((state: ReduxStore) => state.storeSession);
  const { items: itemsSearch } = useSelector((state: ReduxStore) => state.storeSearch);
  const [dateHours, setDateHours] = useState();
  const [quantity, setQuantity] = useState(10);

  useEffect(() => {
    sessionId && !searchText && dispatch(loadSession({ sessionId: sessionId, quantity: quantity }));
    !sessionId && searchText && dispatch(search({ searchText: searchText, quantity: 50, page: 1 }));
  }, []);

  return (
    <div className='containerSectionStore'>
      <div className='header'>
        <p>{title}</p>

        {isAllItems && (
          <button type='button' onClick={() => history.push(`/produtos/${sessionId}`)}>
            Ver tudo
          </button>
        )}
      </div>

      <div className='body'>
        {sessionId &&
          !searchText &&
          items.length > 0 &&
          _.groupBy(items, 'sessionId')[sessionId]?.map((item: any) => {
            return (
              <CardStore
                banner={item.imageUrl}
                title={item.name}
                id={item.id}
                discount={Number(item.price.discount).toFixed(2)}
                value={item.price.price}
                platform={item.platforms}
                duration={item.offerValidUntil}
                pay={item.url}
                dateHourNow={dateHours}
              />
            );
          })}

        {!sessionId &&
          searchText &&
          itemsSearch.length > 0 &&
          itemsSearch?.map((item) => {
            return (
              <CardStore
                banner={item.imageUrl}
                dateHourNow={dateHours}
                discount={Number(item.price?.discount).toFixed(2)}
                duration={item.offerValidUntil}
                id={item.id}
                pay={item.url}
                platform={[]}
                title={item.name}
                value={item.price.price}
              />
            );
          })}
      </div>

      <div>
        {isAllItemsBottom && (
          <button type='button' onClick={() => history.push(`/produtos/${sessionId}`)}>
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionStore;
