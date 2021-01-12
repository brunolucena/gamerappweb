import Footer from 'modules/Loja/Components/Footer';
import Head from 'next/head';
import Header from 'modules/Loja/Components/Header';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { NextPage } from 'next';

export const siteTitle = 'Next.js Sample Website'

interface Props {
  hasFooter?: boolean;
  hasHeader?: boolean;
  menuSessions?: ConfigurationModel[];
}

const Layout: NextPage<Props> = ({ children, hasFooter = true, hasHeader = true, menuSessions }) => {
  return (
    <div>
      <Head>
        <title>GamerApp - Comunidade e Loja de Jogos Digitais</title>
      </Head>

      {hasHeader && <Header menuSessions={menuSessions} />}

      <main>{children}</main>

      {hasFooter && <Footer menuSessions={menuSessions} />}
    </div>
  )
}

export default Layout
