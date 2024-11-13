/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Box({ size }) {
  useEffect(() => {
    const slideInTimer = setTimeout(() => {
      const removeTimer = setTimeout(() => clearTimeout(removeTimer), 4000);
    }, 1000);

    return () => {
      clearTimeout(slideInTimer);
    };
  }, []);

  return <div className="box" style={{ width: size, height: size }}></div>;
}
