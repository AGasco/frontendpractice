export const NavbarComponent = () => {
  return (
    <nav>
      <ul className={styles.navbar__left}>
        <li>Logo</li>
        <li>Push</li>
        <li>Link</li>
        <li>Shop</li>
        <li>Packs</li>
        <li>Help</li>
        <li>More +</li>
      </ul>
      <div className={styles.navbar__right}>
        <div>Try Live for free</div>
        <div>Log in or register</div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
