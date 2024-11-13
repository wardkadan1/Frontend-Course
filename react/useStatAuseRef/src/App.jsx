import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [messageVisible, setMessageVisible] = useState(false);
  const highlightedImageRef = useRef(null);

  const showMessage = () => {
    setMessageVisible(true);
  };

  const highlightImage = (imageRef) => {
    if (highlightedImageRef.current) {
      highlightedImageRef.current.style.border = "none";
    }
    imageRef.style.border = "2px solid red";
    highlightedImageRef.current = imageRef;
  };

  return (
    <div>
      <h1>Welcome to Our Page</h1>
      <button onClick={showMessage}>Click Me</button>
      {messageVisible && <p>Hello! You clicked the button!</p>}
      <div>
        <h2>Image Gallery</h2>
        <img
          src="image1.jpg"
          alt="Image 1"
          ref={(el) => (highlightedImageRef.current = el)}
          onClick={() => highlightImage(highlightedImageRef.current)}
        />
        <img
          src="image2.jpg"
          alt="Image 2"
          ref={(el) => (highlightedImageRef.current = el)}
          onClick={() => highlightImage(highlightedImageRef.current)}
        />
      </div>
    </div>
  );
}

export default App;
