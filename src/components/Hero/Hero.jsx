import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>HII! THIS IS RITESH ROUTRAY</h1>
          <p className={styles.description}>
            I'm a full-stack developer with a great understanding of Data structure and Algorithms
            . Reach out if you'd like to learn more!
          </p>
          <a href="mailto:riteshroutray2005@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
  );
};