import React from "react";
import styles from "../../styles/clock/tooltip.module.scss";

const ClockToolTip = (props) => {
  if (!props.isHover) return;

  return (
    <div
      className={styles.tooltip}
      style={{ top: props.tooltipPos.y, left: props.tooltipPos.x }}
    >
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default ClockToolTip;
