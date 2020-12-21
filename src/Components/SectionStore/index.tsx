import Button from 'Components/Button';
import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import { loadSession } from 'Modules/Loja/Store/Ducks/Session';
import CardStore from 'Components/CardStore';
import { useHistory } from 'react-router-dom';
var _ = require('lodash');

interface Props {
    sessionId: string,
    title?: string,
    isAllItems?: boolean,
    isAllItemsBottom?: boolean
}

const SectionStore: React.FC<Props> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { sessionId, title, isAllItems = true, isAllItemsBottom } = props;
    const {items} = useSelector((state: ReduxStore) => state.storeSession);
    const [dateHours, setDateHours] = useState();
    const [quantity, setQuantity] = useState(20);

    useEffect(() => {
        dispatch(loadSession({sessionId: sessionId, quantity: quantity}))
    }, [])
    
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
                    items.length > 0 && _.groupBy(items, 'sessionId')[sessionId]?.map((item: any) => {
                        return <CardStore
                            banner={item.imageUrl}
                            title={item.name}
                            discount={Number(item.price.discount).toFixed(2)}
                            value={item.price.price}
                            platform={item.platforms}
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
    
}

export default SectionStore;