// import EmptyScreen from 'Modules/Loja/Components/EmptyScreen';
// import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
// import { search, searchClear } from 'Modules/Loja/Store/Ducks/Search';
import CardStore from 'components/CardStore';
import EmptyScreen from 'modules/Loja/Components/EmptyScreen';
import Link from 'next/link';
import moment from 'moment';
import styles from './styles.module.scss';
import { ConfigurationModel } from 'modules/Loja/Store/Configuration/models';
import { ReduxStore } from 'store/redux';
import { getSessionItemBySessionId } from 'modules/Loja/Store/Session';
import { useState } from 'react';
import { useTypedSelector } from 'store/redux/store';

interface Props {
  isAllItems?: boolean;
  isAllItemsBottom?: boolean;
  session: ConfigurationModel;
}

const SectionStore: React.FC<Props> = ({ isAllItems, session }) => {
  const { id, title } = session;

  const { session: sessionRedux } = useTypedSelector((state: ReduxStore) => state);

  // const { count, name } = sessionRedux;
  const { name } = sessionRedux;

  const items = getSessionItemBySessionId(sessionRedux, id);

  const [dateHours] = useState(moment());

  const header = title ?? name;
  const isEmpty = items.length === 0;
  // const hasMoreItems = count > items.length;

  return (
    <div className={styles.containerSectionStore}>
      <div className={styles.header}>
        {/* essa div vazia é necessária pra fazer o layout */}
        <div />

        <p className={styles.title}>{header}</p>

        <div className={styles['link-container']}>
          {isAllItems && (
            <Link href={`/produtos/${id}`}>
              <a className={styles['ver-tudo']}>
                Ver tudo
              </a>
            </Link>
          )}
        </div>
      </div>

      {!isEmpty ? (
        <div className={styles.body}>
          {items.map((item, index) => (
            <CardStore
              banner={item.imageUrl}
              dateHourNow={dateHours}
              discount={item.price?.discountPercent}
              duration={item.offerValidUntil}
              id={item.id}
              key={item.id + index}
              oldPrice={item.price.oldPrice}
              platforms={item.platforms}
              title={item.name}
              value={item.price.price}
            />
          ))}
        </div>
      ) : (
          <div className={styles.empty}>
            <EmptyScreen text='Puxa, não achei nenhum resultado nesta busca =/' />
          </div>
        )}

      {/* <div className={styles.footer}>
        {isAllItemsBottom && hasMoreItems && (
          <button type='button'>
            Ver mais
          </button>
        )}
      </div> */}
    </div>)
};

export default SectionStore;
