import React from "react";
import { AppRegistry, asset, Pano, Text, View, VrButton } from "react-vr";

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = { clicks: 0 };
  }

  handleClick = () => {
    const { clicks } = this.state;
    this.setState({ clicks: clicks + 1 });
  };

  render() {
    const { clicks } = this.state;

    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />

        <VrButton onClick={this.handleClick}>
          <View
            style={{
              backgroundColor: "blue",
              width: 2,
              padding: 0.01,
              transform: [{ translate: [-1, 1, -5] }]
            }}
          >
            <Text
              style={{ fontSize: 0.2, color: "white", textAlign: "center" }}
            >{`Clicks: ${clicks}`}</Text>
          </View>
        </VrButton>

        {/* <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: 2,
            alignItems: "stretch",
            transform: [{ translate: [-1, 1, -5] }]
          }}
        >
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: "red" }}>
            <Text style={{ fontSize: 0.2, textAlign: "center" }}>Red!</Text>
          </View>

          <View style={{ margin: 0.1, height: 0.3, backgroundColor: "white" }}>
            <Text
              style={{ fontSize: 0.2, textAlign: "center", color: "black" }}
            >
              white
            </Text>
          </View>
        </View> */}
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
