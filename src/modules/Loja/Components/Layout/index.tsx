import Footer from 'modules/Loja/Components/Footer';
import Head from 'next/head';
import Header from 'modules/Loja/Components/Header';
import styles from './styles.module.scss';
import { SITE_TITLE, environment } from 'lib/configs';

interface Props {
  hasFooter?: boolean;
  hasHeader?: boolean;
}

export default function Layout({ children, hasFooter = true, hasHeader = true }: React.PropsWithChildren<Props>) {
  const domain = process.env.DOMAIN;

  return (
    <>
      <Head>
        <title>{environment !== 'production' ? environment + ' - ' : ''}{SITE_TITLE}</title>

        <meta name="google-site-verification" content="fH4mZpnIvqiMTArcxl91r0WskryaZ4dEuhXGXvmUy7s" />
        <meta key="title" name="title" content="GamerApp - Comunidade e Loja de Jogos Digitais" />
        <meta
          key="description"
          name="description"
          content="GamerApp é uma comunidade e loja de jogos digitais. Encontre amigos, veja conteúdo, troque informações, compre seus jogos preferidos e muito mais."
        />
        <meta
          key="keywords"
          name="keywords"
          content="jogos digitais, jogos de pc, gift cards, rede social gamer, comunidade gamer, loja de jogos digitais, gamerapp, gamer app, descontos em jogos, jogos para linux, jogos para mac, steam, riot, blizzard, origin, wild life, nuuvem, valve, epic games, games, gamer, pc gamer"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gamerapp.com.br/" />
        <meta key="og-title" property="og:title" content="GamerApp - Comunidade e Loja de Jogos Digitais" />
        <meta key="og-description"
          property="og:description"
          content="GamerApp é uma comunidade e loja de jogos digitais. Encontre amigos, veja conteúdo, troque informações, compre seus jogos preferidos e muito mais."
        />
        <meta key="og-image" property="og:image" content={`${domain}/images/seo/media-gamerapp.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.gamerapp.com.br/" />
        <meta key="twitter-title" property="twitter:title" content="GamerApp - Comunidade e Loja de Jogos Digitais" />
        <meta
          key="twitter-description"
          property="twitter:description"
          content="GamerApp é uma comunidade e loja de jogos digitais. Encontre amigos, veja conteúdo, troque informações, compre seus jogos preferidos e muito mais."
        />
        <meta key="twitter-image" property="twitter:image" content={`${domain}/images/seo/media-gamerapp.png`} />
      </Head>

      <div>
        {hasHeader && <Header />}

        <main className={styles.mainContainer}>{children}</main>

        {hasFooter && <Footer />}
      </div>
    </>
  );
}
