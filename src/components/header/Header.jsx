import styles from "./Header.module.css";
import Navbar from "./Navbar.jsx";
import SearchBar from "./SearchBar.jsx";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={Logo} alt="GGMIX Logo" />
        </div>
        <SearchBar />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
