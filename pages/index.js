import HeadComponent from '../components/Head.component';
import HomeFooter from '../components/HomeFooter/HomeFooter.component';
import HomeMain from '../components/HomeMain/HomeMain.component';

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
