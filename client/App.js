import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={{ flex: 1, width: "100%" }}
          ref={(r) => {
            this.camera = r
          }}
        ></Camera>
        <Text>Happy Birthday to me!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
