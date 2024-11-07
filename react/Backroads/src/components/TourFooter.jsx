/* eslint-disable react/prop-types */

export default function TourFooter({ location, duration, cost }) {
  return (
    <div className="tour-footer">
      <p>
        <span>
          <i className="fas fa-map"></i>
        </span>
        {location}
      </p>
      <p>{duration} days</p>
      <p>from ${cost}</p>
    </div>
  );
}
