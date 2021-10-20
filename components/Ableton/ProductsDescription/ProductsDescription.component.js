import styles from './ProductsDescription.module.scss';

function ProductsDescriptionComponent() {
  return (
    <div className={styles.productsDescription}>
      <div className={styles.textSection}>
        <div className={styles.mainLabel}>
          We make&nbsp;
          <span>Live</span>
          ,&nbsp;
          <span>Push</span>
          &nbsp;and&nbsp;
          <span>Link</span>
          &nbsp;- unique software and hardware for music creation and
          performance. With these products, our community of users creates
          amazing things.
        </div>
        <div className={styles.subLabel}>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from around the world.
        </div>
      </div>

      <div className={styles.imagesContainer}>
        <div className={styles.yellowBackground} />
      </div>
    </div>
  );
}

export default ProductsDescriptionComponent;
