/* eslint-disable react/prop-types */

import { getImageUrl } from "../../utils";
import { useContext } from "react";

import { ImageSizecontext } from "./../../context/ImageSize.context";

export default function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizecontext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
