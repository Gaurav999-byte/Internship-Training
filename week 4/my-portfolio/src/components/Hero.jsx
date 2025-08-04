import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero} id="about">
    <h1 className={styles.title}>Hello, I'm Gaurav Nagrale</h1>
    <p className={styles.subtitle}>A Frontend Developer passionate about React and design.</p>
  </section>
);

export default Hero;
