import { useEffect, useState } from "react";

export default function FavoriteColor() {
  const [favoriteColor, setFavoriteColor] = useState("blue");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoriteColor("green");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
    </div>
  );
}
