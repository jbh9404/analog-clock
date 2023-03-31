import { useEffect } from "react";
import { useClockStore } from "../stores/useClockStore";

function useClockHands() {
  const hands = useClockStore((state) => state.hands);
  const setHands = useClockStore((state) => state.setHands);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const hourHandDeg = ((hour / 12) * 360 + (30 * minute) / 60 + 90) % 360;
      const minuteHandDeg = (minute * 6 + 90) % 360;
      const secondHandDeg = (second * 6 + 90) % 360;

      setHands({
        hour: `rotate(${hourHandDeg}deg)`,
        minute: `rotate(${minuteHandDeg}deg)`,
        second: `rotate(${secondHandDeg}deg)`,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return hands;
}

export default useClockHands;
