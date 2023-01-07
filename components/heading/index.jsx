import React from "react";
import styles from "./heading.module.scss";

function Heading(props) {
  if (props.type == "h1") {
    return (
      <header>
        <h1 className={styles.heading}>{props.children}</h1>
      </header>
    );
  }
  if (props.type == "h2") {
    return (
      <header>
        <h2 className={styles.subHeading}>{props.children}</h2>
      </header>
    );
  }
}

export default Heading;
