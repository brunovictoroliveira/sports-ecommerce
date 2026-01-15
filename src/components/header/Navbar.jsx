import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/">
              Início
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/products">
              Produtos
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/cart">
              Carrinho
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
