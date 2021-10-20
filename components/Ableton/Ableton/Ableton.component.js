import Navbar from '../Navbar/Navbar.component';
import styles from './Ableton.module.scss';
import Hero from '../Hero/Hero.component';
import ProductsDescription from '../ProductsDescription/ProductsDescription.component';
import { abletonData as data } from '../../../data/ableton';

const AbletonComponent = () => {
  return (
    <div className={styles.ableton}>
      <div className={styles.main}>
        <Navbar />
        <main className={styles.content}>
          <Hero imageSrc={data?.images?.home} />
          <ProductsDescription />
        </main>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default AbletonComponent;
