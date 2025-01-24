import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p className="fontd">Feel free to Contact!</p>

        <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone (2).png")} alt="phone icon" />
          <a href="https://wa.me/201026981795">phone-whatsapp</a>
        </li>
        </ul>

       
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:radea4082@gmail.com">Emial</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abd-al-rhman-foly-318722268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/abdalhmanalfoly">Github</a>
        </li>
      </ul>
    </footer>
  );
};
