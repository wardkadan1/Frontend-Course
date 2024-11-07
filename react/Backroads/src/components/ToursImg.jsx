/* eslint-disable react/prop-types */

export default function ToursImg({ image, date }) {
  return (
    <div className="tour-img-container">
      <img src={image} className="tour-img" alt="" />
      <p className="tour-date">{date}</p>
    </div>
  );
}
