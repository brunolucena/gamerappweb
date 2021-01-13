import Container from 'components/Container';
import ContentSlider from 'components/ContentSlider';
import SectionStore from 'components/SectionStore';
import styles from './styles.module.scss';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { ReduxStore } from 'store/redux';
import { getSessionItemBySessionId } from 'modules/Loja/Store/Session';
import { useTypedSelector } from 'store/redux/store';
import { getBannersBySectionId } from 'modules/Loja/Store/Banner';

interface Props {
  sessions?: ConfigurationModel[];
}

export default function Home({ sessions }: Props) {
  const { banner: bannerRedux, session: sessionRedux } = useTypedSelector((state: ReduxStore) => state);

  const { count, name } = sessionRedux;

  return (
    <div className={styles['home-container']}>
      <Container>
        <div className={styles['home-content']}>
          {sessions?.map((session, index) => {
            if (session.type === 'Game') {
              const items = getSessionItemBySessionId(sessionRedux, session.id);

              return (
                <SectionStore
                  count={count}
                  key={session.id + index}
                  id={session.id}
                  isAllItems
                  items={items}
                  name={session.title ?? name}
                />
              );
            }

            const items = getBannersBySectionId(bannerRedux, session.id);

            return <ContentSlider key={session.id + index} items={items} slidesToShow={1} />;
          })}
        </div>
      </Container>
    </div>
  );
}
