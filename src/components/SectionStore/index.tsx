// import EmptyScreen from 'Modules/Loja/Components/EmptyScreen';
// import { loadSession, loadSessionClear } from 'Modules/Loja/Store/Ducks/Session';
// import { search, searchClear } from 'Modules/Loja/Store/Ducks/Search';
import CardStore from 'components/CardStore';
import EmptyScreen from 'modules/Loja/Components/EmptyScreen';
import Link from 'next/link';
import moment from 'moment';
import styles from './styles.module.scss';
import { ProductItem } from 'modules/Loja/Store/Session/models';
import { useState } from 'react';

interface Props {
  count: number;
  id?: string;
  isAllItems?: boolean;
  isAllItemsBottom?: boolean;
  items: ProductItem[];
  name: string;
}

const SectionStore: React.FC<Props> = ({ count, id, isAllItems, isAllItemsBottom, items, name }) => {
  const [dateHours] = useState(moment());

  const isEmpty = items.length === 0;
  const hasMoreItems = count > items.length;

  return (
    <div className={styles.containerSectionStore}>
      <div className={styles.header}>
        {/* essa div vazia é necessária pra fazer o layout */}
        <div />

        <p className={styles.title}>{name}</p>

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

      <div className={styles.footer}>
        {isAllItemsBottom && hasMoreItems && (
          <button type='button'>
            Ver mais
          </button>
        )}
      </div>
    </div>)
};

export default SectionStore;
