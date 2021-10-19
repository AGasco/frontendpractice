import Logo from '../Logo/Logo.component';

import styles from './Navbar.module.scss';

export const NavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <ul className={styles.navbar__left}>
        <li>Live</li>
        <li>Push</li>
        <li>Link</li>
        <li>Shop</li>
        <li>Packs</li>
        <li>Help</li>
        <li className={styles.More}>
          More <span>+</span>
        </li>
        <li className={styles.navbar__right}>
          <div className={styles.TryLive}>Try Live for free</div>
          <div className={styles.Login}>Log in or register</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
