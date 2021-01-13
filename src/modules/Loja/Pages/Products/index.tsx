import BackButton from 'components/BackButton';
import Box from 'components/Box';
import Container from 'components/Container';
import SectionStore from 'components/SectionStore';
import styles from './styles.module.scss';
import { ProductItem } from 'modules/Loja/Store/Session/models';

interface Props {
  count: number;
  items: ProductItem[];
  title: string;
}

export default function Products({ count, items, title }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Box paddingTop={5} position='absolute' top={110} bottom={5} left={0} right={0}>
        <BackButton fontSize={28} iconColor='#999' />
      </Box>

      <div className={styles['products-container']}>
        <Container>
          <SectionStore
            count={count}
            isAllItemsBottom
            items={items}
            name={title}
          />
        </Container>
      </div>
    </>
  );
}
