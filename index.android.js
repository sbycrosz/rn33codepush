import React, { Component } from "react";
import { View, AppRegistry } from "react-native";

console.log("loading source..");

class Example extends Component {
  componentDidMount = () => {
    console.log("mounting example");
  };
  componentWillUnmount = () => {
    console.log("unmounting");
  };
  render() {
    return (
      <View style={{ backgroundColor: "red", flex: 1 }}>
      </View>
    );
  }
}

AppRegistry.registerComponent("example", () => Example);
