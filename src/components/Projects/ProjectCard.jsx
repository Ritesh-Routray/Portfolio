import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, id },
}) => {
  return (
    <div className={styles.container} id={styles.id}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
      </ul>
      <div className={styles.links}>

        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};