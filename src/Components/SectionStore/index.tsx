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
    const { items: itemSession } = useSelector((state: ReduxStore) => state.storeSession);
    const { items: itemsSearch } = useSelector((state: ReduxStore) => state.storeSearch);
    const [dateHours, setDateHours] = useState();
    const [quantity, setQuantity] = useState(10);

    useEffect(() => {
        sessionId && !searchText && dispatch(loadSession({sessionId: sessionId, quantity: quantity}))
        !sessionId && searchText && dispatch(search({searchText: searchText, quantity: 50, page: 1}))
    }, [sessionId || searchText])
    
    return <div className="containerSectionStore">
        <div className="header">
            <p>{title}</p>
            {
                isAllItems && <>
                    <button
                        type="button"
                        onClick={()=>history.push(`/produtos/${sessionId}`)}
                    >
                        Ver tudo
                    </button>
                </>
            }
        </div>
        <div className="body">
            <>
                {
                    sessionId && itemSession && _.groupBy(itemSession, 'sessionId')[sessionId]?.map((item: any) => {
                        return <CardStore
                            id={item.id}
                            banner={item.imageUrl}
                            title={item.name}
                            discount={Number(item.price.discount).toFixed(2)}
                            value={item.price.price}
                            oldPrice={item.price.oldPrice}
                            platform={item.platforms}
                            duration={item.offerValidUntil}
                            pay={item.url}
                            dateHourNow={dateHours}
                        />
                    })
                }
                 {
                    searchText && itemsSearch && itemsSearch?.map((item: any) => {
                        return <CardStore
                            id={item.id}
                            banner={item.imageUrl}
                            title={item.name}
                            discount={Number(item.price?.discount).toFixed(2)}
                            value={item.price.price}
                            platform={item.platforms}
                            oldPrice={item.price.oldPrice}
                            duration={item.offerValidUntil}
                            pay={item.url}
                            dateHourNow={dateHours}
                        />
                    })
                }
            </>
        </div>
        <div>
        {
                isAllItemsBottom && <>
                    <button
                        type="button"
                        onClick={()=>history.push(`/produtos/${sessionId}`)}
                    >
                        Ver mais
                    </button>
                </>
            }
        </div>
    </div>
};

export default SectionStore;
