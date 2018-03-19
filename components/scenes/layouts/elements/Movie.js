import React from "react";
import { View, Video, asset } from "react-vr";

const Movie = () => (
  <View style={{ margin: 0.1, height: 2 }}>
    <Video style={{ height: 2 }} source={asset("fireplace.mp4")} />
  </View>
);

export default Movie;
