import "react-native";
import "react-vr";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import Index from "../index.vr";

it("renders correctly", () => {
  renderer.create(<Index />);
});
