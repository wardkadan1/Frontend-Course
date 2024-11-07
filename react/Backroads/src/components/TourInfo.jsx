/* eslint-disable react/prop-types */
import TourTitle from "./TourTitle";
import TourFooter from "./TourFooter";

export default function TourInfo({ title, info, location, duration, cost }) {
  return (
    <div className="tour-info">
      <TourTitle title={title} />
      <p>{info}</p>
      <TourFooter location={location} duration={duration} cost={cost} />
    </div>
  );
}
