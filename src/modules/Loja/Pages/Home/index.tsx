import Container from 'components/Container';
// import ContentSlider from 'components/ContentSlider';
// import SectionStore from 'components/SectionStore';
import styles from './styles.module.scss';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';

interface Props {
  sessions: ConfigurationModel[];
}

const Home: React.FC<Props> = ({ sessions }) => {
  console.log({ sessions });

  return (
    <div className={styles['home-container']}>
      <Container>
        <div className={styles['home-content']}>
          {/* {sessions.map((session: any) => (
            <>
              {session.type === 'Banner' && <ContentSlider sessionId={session.id} itemsOnScreen={1} />}
              {session.type === 'Game' && <SectionStore sessionId={session.id} title={session.title} />}
            </>
          ))} */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
