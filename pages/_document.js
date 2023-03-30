import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Sharp'
          rel='stylesheet'
        />
        {/* CDN FONTS  */}
        <link href="http://fonts.cdnfonts.com/css/solfia" rel="stylesheet" />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.13.1/css/all.css'
          integrity='sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
