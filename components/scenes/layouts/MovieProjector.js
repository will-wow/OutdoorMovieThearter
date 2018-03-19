import React from "react";
import { View } from "react-vr";

import Movie from "./elements/Movie";

const MovieProjector = () => (
  <View
    style={{
      flex: 1,
      width: 5,
      flexDirection: "column",
      alignItems: "stretch",
      backgroundColor: "#333333",
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, 0, -5] }]
    }}
  >
    <Movie />
  </View>
);

export default MovieProjector;
