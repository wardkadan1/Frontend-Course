import Place from "../Place/Place";
import { places } from "../../data/places.js";

export default function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
