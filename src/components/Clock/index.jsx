import React, { useState } from "react";
import useClockHands from "../../libs/hooks/useClockHands";
import styles from "../../styles/clock/clock.module.scss";
import classNames from "classnames";
import ClockToolTip from "../ClockToolTip";
import { useColorStore } from "../../libs/stores/useColorStore";

const Clock = () => {
  const hands = useClockHands();
  const color = useColorStore((state) => state.color);

  const [isHover, setIsHover] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleCursorIn = (e) => {
    setIsHover(true);
    setTooltipPos({ x: e.clientX + 15, y: e.clientY - 20 });
  };

  const handleCursorMove = (e) => {
    if (isHover) {
      setTooltipPos({ x: e.clientX + 15, y: e.clientY - 20 });
    }
  };

  const handleCursorOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className={classNames(styles["clock"], styles[color])}
      onMouseMove={handleCursorMove}
      onMouseEnter={handleCursorIn}
      onMouseLeave={handleCursorOut}
    >
      <div className={styles["clock-inside"]}>
        <div
          className={classNames(styles["hand"], styles["hour-hand"])}
          style={{ transform: hands.hour }}
        />
        <div
          className={classNames(styles["hand"], styles["minute-hand"])}
          style={{ transform: hands.minute }}
        />
        <div
          className={classNames(styles["hand"], styles["second-hand"])}
          style={{ transform: hands.second }}
        />
      </div>
      <ClockToolTip isHover={isHover} tooltipPos={tooltipPos} />
    </div>
  );
};

export default Clock;
