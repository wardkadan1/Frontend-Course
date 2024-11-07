import { useState } from "react";
import "./ProductList.css";
import { product } from "./data";
import ProductInfo from "./components/ProductInfo";
import ProductImg from "./components/ProductImg";

function ProductList() {
  const [showDetails, setShowDetails] = useState({});

  const handleDetailsToggle = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="product-list">
      {product.map((prod) => {
        return (
          <div key={prod.id} className="product-card">
            <ProductImg image={prod.image} title={prod.title} />
            <ProductInfo
              handleDetailsToggle={handleDetailsToggle}
              showDetails={showDetails}
              title={prod.title}
              cost={prod.cost}
              id={prod.id}
              text={prod.text}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
