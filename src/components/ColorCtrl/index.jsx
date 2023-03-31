import classNames from "classnames";
import React from "react";
import { useColorStore } from "../../libs/stores/useColorStore";
import styles from "../../styles/clock/btnCtrl.module.scss";

const colorData = [
  { value: "orange", id: 1 },
  { value: "purple", id: 2 },
  { value: "green", id: 3 },
];

const ColorCtrl = () => {
  const color = useColorStore((state) => state.color);
  const setColor = useColorStore((state) => state.setColor);

  return (
    <div className={styles["btn-ctrl"]}>
      {colorData.map((n) => (
        <button
          className={classNames(styles.btn, styles[n.value])}
          key={n.id}
          onClick={() => setColor(n.value)}
        >
          {n.value}
        </button>
      ))}
    </div>
  );
};

export default ColorCtrl;
