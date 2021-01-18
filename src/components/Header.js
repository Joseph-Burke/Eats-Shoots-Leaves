import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../actions";
import logo from "../logo.png";
import styles from './Header.module.css';

const Header = props => {
  const { homeURL } = props;
  return (
  <header className={styles.header}>
    <img src={logo} className={styles['header-image']}/>
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href={homeURL}>Recipe Index</a>
        </li>
      </ul>

    </nav>
  </header>
  )
};

export default Header;
