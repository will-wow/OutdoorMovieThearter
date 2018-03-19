import React from "react";
import { AppRegistry, asset, Pano, View, Sound } from "react-vr";

import MainMenu from "./components/scenes/MainMenu";
import MovieThearter from "./components/scenes/MovieThearter";

class OutdoorMovieThearter extends React.Component {
  constructor() {
    super();

    this.state = {
      mainMenu: true
    };
  }

  startMovie = () => this.setState({mainMenu: false});

  render() {
    const { mainMenu } = this.state;
    return (
      <View>
        <Pano source={asset("fort-night.jpg")}>
          <Sound
            loop
            volume={0.8}
            source={{ mp3: asset("fort-night-atmosphere.mp3") }}
          />
        </Pano>
        {mainMenu ? <MainMenu startMovie={this.startMovie} /> : <MovieThearter />}
      </View>
    );
  }
}

export default OutdoorMovieThearter;

AppRegistry.registerComponent(
  "OutdoorMovieThearter",
  () => OutdoorMovieThearter
);
