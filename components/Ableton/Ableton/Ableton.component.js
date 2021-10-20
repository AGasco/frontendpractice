import Navbar from '../Navbar/Navbar.component';
import styles from './Ableton.module.scss';
import Hero from '../Hero/Hero.component';
import { abletonData as data } from '../../../data/ableton';

const AbletonComponent = () => {
  return (
    <div className={styles.ableton}>
      <Navbar />
      <div className={styles.main}>
        <main className={styles.content}>
          <Hero imageSrc={data?.images?.home} />
        </main>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default AbletonComponent;
