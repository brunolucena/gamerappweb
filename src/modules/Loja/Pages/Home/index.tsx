// import ContentSlider from 'components/ContentSlider';
import Container from 'components/Container';
import SectionStore from 'components/SectionStore';
import styles from './styles.module.scss';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
interface Props {
  sessions?: ConfigurationModel[];
}

export default function Home({ sessions }: Props) {
  console.log({ sessions });
  return (
    <div className={styles['home-container']}>
      <Container>
        <div className={styles['home-content']}>
          {sessions?.map((session, index) => (
            session.type === 'Game'
              ? <SectionStore key={session.id + index} session={session} />
              : <div>banner</div>
            // : <ContentSlider sessionId={session.id + index} itemsOnScreen={1} />
          ))}
        </div>
      </Container>
    </div>
  );
}
