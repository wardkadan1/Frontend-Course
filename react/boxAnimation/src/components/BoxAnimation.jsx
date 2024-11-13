import "./BoxAnimation.css";
import Box from "./Box";

function BoxAnimationApp() {
  return (
    <div className="box-container">
      <Box size="50px" />
      <Box size="100px" />
      <Box size="150px" />
    </div>
  );
}

export default BoxAnimationApp;
