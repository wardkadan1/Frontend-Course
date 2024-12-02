import { useState } from "react";
import "./App.css";
import List from "./components/List/LIst";
import ImageSizeProvider from "./context/ImageSize.context";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <ImageSizeProvider imagesize={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </ImageSizeProvider>
    </>
  );
}

export default App;
