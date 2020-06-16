import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.ibb.co/GJN88pP/1280px-React-icon-svg.png',
          }}
        />
        <Text style={{ fontSize: 25, textAlign: "center", color: "white", padding: 10, paddingLeft: 30, paddingRight: 30, margin: 10, borderRadius: 10 }}> React Native </Text>
        <View style={styles.bottomView}>
          <Text style={{
            fontSize: 18, marginRight: 20, marginBottom: 20,
            textAlign: 'right', color: "white", alignSelf: "stretch",
          }}>
            Ruchi Tiwari
                </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C34',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tinyLogo: {
    width: 180,
    height: 180,

  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});