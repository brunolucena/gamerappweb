import Container from 'components/Container';
import SectionStore from 'components/SectionStore';
import styles from './styles.module.scss';
import { useTypedSelector } from 'store/redux/store';
// import ContentSlider from 'components/ContentSlider';

export default function Home() {
  const { feedSessions } = useTypedSelector((state) => state.configuration);

  return (
    <div className={styles['home-container']}>
      <Container>
        <div className={styles['home-content']}>
          {feedSessions.map(session => (
            <>
              {/* {session.type === 'Banner' && <ContentSlider sessionId={session.id} itemsOnScreen={1} />} */}
              {session.type === 'Game' && <SectionStore sessionId={session.id} title={session.title} />}
            </>
          ))}
        </div>
      </Container>
    </div>
  );
}
