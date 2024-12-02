/* eslint-disable react/prop-types */
import PlaceImage from "../PlaceImage/PlaceImage";

export default function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}
