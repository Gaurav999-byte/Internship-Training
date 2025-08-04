import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>MyPortfolio</div>
    <div className={styles.navLinks}>
      <a href="#about" className={styles.navLink}>About</a>
      <a href="#projects" className={styles.navLink}>Projects</a>
      <a href="#contact" className={styles.navLink}>Contact</a>
    </div>
  </nav>
);

export default Navbar;
