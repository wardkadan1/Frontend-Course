import { useState, useEffect } from "react";
export default function Spinner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Don't render anything if spinner is hidden

  return (
    <div className="spinner">
      <div></div>
    </div>
  );
}
