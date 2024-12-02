/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ImageSizecontext = createContext(null);

export default function ImageSizeProvider({ imagesize, children }) {
  return (
    <ImageSizecontext.Provider value={imagesize}>
      {children}
    </ImageSizecontext.Provider>
  );
}
