import MainHome from '../components/Main/HomeMain/HomeMain.component';
import Layout from '../components/Main/Layout/Layout.component';

export const Home = () => {
  return <MainHome />;
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
