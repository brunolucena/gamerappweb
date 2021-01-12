import Footer from 'modules/Loja/Components/Footer';
import Head from 'next/head';
import Header from 'modules/Loja/Components/Header';
import { ConfigurationModel } from 'modules/Loja/Lib/Configuration/models';
import { NextPage } from 'next';

interface Props {
  hasFooter?: boolean;
  hasHeader?: boolean;
  menuSessions?: ConfigurationModel[];
}

const Layout: NextPage<Props> = ({ children, hasFooter = true, hasHeader = true, menuSessions }) => {
  return (
    <div>
      {hasHeader && <Header menuSessions={menuSessions} />}

      <main>{children}</main>

      {hasFooter && <Footer menuSessions={menuSessions} />}
    </div>
  )
}

export default Layout
