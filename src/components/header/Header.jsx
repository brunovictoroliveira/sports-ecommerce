import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>GGMIX</h1>
      </div>
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
    </header>
  );
}

export default Header;
