import styles from './Hero.module.scss';

export function HeroComponent({ imageSrc = '' }) {
  return (
    <div className={styles.hero}>
      <img src={imageSrc} />
      <div>Ableton</div>
    </div>
  );
}

export default HeroComponent;
