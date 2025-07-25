import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdalrhman</h1>
        <p className={styles.description}>
          I'm a Full Stack developer with 1 years of experience using React and
          NodeJS . Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1uYqvQY2obKsLzDZoF9h3r1yiuH0_Hw-l/view"  download className={styles.contactBtn}>
         Download CV
        </a>
      
      

      </div>
      <img
        src={getImageUrl("hero/R (1).png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
