/* eslint-disable react/prop-types */

export default function ProductImg({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} className="product-image" />
    </div>
  );
}
