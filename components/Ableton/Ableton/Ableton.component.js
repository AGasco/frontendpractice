import Navbar from '../Navbar/Navbar.component';
import styles from './Ableton.module.scss';

export function AbletonComponent() {
  return (
    <div className={styles.ableton}>
      <div className={styles.main}>
        <Navbar />
        <div>Content</div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default AbletonComponent;
