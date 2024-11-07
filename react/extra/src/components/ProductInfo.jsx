/* eslint-disable react/prop-types */
import ProductDetails from "./ProductDetails";
export default function ProductInfo({
  handleDetailsToggle,
  showDetails,
  title,
  cost,
  id,
  text,
}) {
  return (
    <div className="product-info">
      <h3>{title}</h3>
      <p>${cost}</p>
      <button onClick={() => handleDetailsToggle(id)}>
        {showDetails[id] ? "Hide Details" : "View Details"}
      </button>
      {showDetails[id] && <ProductDetails text={text} />}
    </div>
  );
}
