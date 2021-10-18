import '../styles/globals.scss';
import Layout from '../components/Main/Layout/Layout.component';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
