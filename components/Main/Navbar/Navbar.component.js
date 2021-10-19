import Link from 'next/link';
import styles from './Navbar.module.scss';

export const NavbarComponent = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.brand}>antoniofgasco</a>
      </Link>
      <div>Frontend Practice</div>
    </div>
  );
};

export default NavbarComponent;
