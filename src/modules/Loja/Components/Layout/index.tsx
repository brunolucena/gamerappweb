import Footer from 'modules/Loja/Components/Footer';
import Head from 'next/head';
import styles from './styles.module.scss';
import { NextPage } from 'next';
// import Header from 'components/Header';

export const siteTitle = 'Next.js Sample Website'

interface Props {
  hasFooter?: boolean;
  hasHeader?: boolean;
}

const Layout: NextPage<Props> = ({ children, hasFooter = true, hasHeader = true }) => {
  return (
    <div>
      <Head>
        <title>GamerApp - Comunidade e Loja de Jogos Digitais</title>
      </Head>

      {/* {hasHeader && <Header />} */}

      <main>{children}</main>

      {hasFooter && <Footer />}
    </div>
  )
}

export default Layout
