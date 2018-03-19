import React from "react";
import { View, Text, VrButton } from "react-vr";

const Button = ({onClick}) => (
  <View style={{ margin: 0.1, height: 0.3, backgroundColor: "#1AC8F7" }}>
    <VrButton onClick={onClick}>
      <Text style={{ fontSize: 0.2, textAlign: "center" }}>Select a Movie</Text>
    </VrButton>
  </View>
);

export default Button;
