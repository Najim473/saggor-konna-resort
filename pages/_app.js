import '../styles/globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';
import Layout from '../components/layout';

// for fancy ui
import '@fancyapps/ui/dist/fancybox.css';
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import ContextProvider from '../contexts/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
