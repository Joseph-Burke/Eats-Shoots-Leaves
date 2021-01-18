import logo from "../assets/logo.png";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-testid='header' className={`${styles.header}`}>
      <img src={logo} className={styles["header-image"]} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/"> Recipe Index </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
