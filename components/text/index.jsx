import React from "react";
import styles from "./text.module.scss";
function Text(props) {
  if (props.type == "p") {
    return <p className={styles.text}>{props.children}</p>;
  }
  if (props.type == "figcaption") {
    return (
      <figcaption className={styles.figcaption}>{props.children}</figcaption>
    );
  }
}

export default Text;
