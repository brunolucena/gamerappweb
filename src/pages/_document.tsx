import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    const environment = process.env.NODE_ENV;

    return (
      <Html>
        <Head>
          {environment === 'production' && (
            // Global Site Tag (gtag.js) - Google Analytics
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />

              <script src="https://www.googleoptimize.com/optimize.js?id=OPT-TV7R3WX"></script>
            </>
          )}

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
          <meta key="og-image" property="og:image" content="https://www.gamerapp.com.br/media-gamerapp.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.gamerapp.com.br/" />
          <meta key="twitter-title" property="twitter:title" content="GamerApp - Comunidade e Loja de Jogos Digitais" />
          <meta
            key="twitter-description"
            property="twitter:description"
            content="GamerApp é uma comunidade e loja de jogos digitais. Encontre amigos, veja conteúdo, troque informações, compre seus jogos preferidos e muito mais."
          />
          <meta key="twitter-image" property="twitter:image" content="https://www.gamerapp.com.br/media-gamerapp.png" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
