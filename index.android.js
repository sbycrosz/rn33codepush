// index.android.js

import React, { Component } from "react";
import { View, AppRegistry } from "react-native";

import codePush from "react-native-code-push";

const backgroundColor = "red";
console.log(`backgroundColor: ${backgroundColor}`);

class Example extends Component {
  componentWillMount = () => {
    console.log("componentWillMount");
    codePush.sync({
      deploymentKey: "gbtw0agOhYZ-zXvB5xZPQuDpvFdENk0C5bl3x",
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };

  render() {
    console.log(`rendering ${backgroundColor}`);
    return (
      <View style={{ flex: 1, backgroundColor }}>
      </View>
    );
  }
}

AppRegistry.registerComponent("example", () => Example);
