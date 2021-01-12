import Footer from 'modules/Loja/Components/Footer';
import Header from 'modules/Loja/Components/Header';
import styles from './styles.module.scss';
import { NextPage } from 'next';

interface Props {
  hasFooter?: boolean;
  hasHeader?: boolean;
}

const Layout: NextPage<Props> = ({ children, hasFooter = true, hasHeader = true }) => {
  return (
    <div>
      {hasHeader && <Header />}

      <main className={styles.mainContainer}>{children}</main>

      {hasFooter && <Footer />}
    </div>
  )
}

export default Layout
