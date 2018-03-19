import React from "react";
import { View } from "react-vr";

import Title from "./elements/Title";
import Button from "./elements/Button";

const MainMenuContainer = ({startMovie}) => (
  <View
    style={{
      flex: 1,
      width: 5,
      flexDirection: "column",
      alignItems: "stretch",
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, 0, -5] }]
    }}
  >
    <Title />
    <Button onClick={startMovie} />
  </View>
);

export default MainMenuContainer;
