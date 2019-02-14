/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import NativeTachyons, { styles as s } from "react-native-style-tachyons";
import { createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <SafeAreaView>
      //style={styles.container} >
      <View>
      //style={styles.container}>
        <Image source={require('./images/perfect-breakfast-set.jpg')} /> // style={styles.image}/>
        <Image source={require('./images/hand-care.jpg')} /> // style={styles.image} />
        <View  > // style={styles.container}>
          <SafeAreaView>
          <Text > // style={styles.bodyText}>
          The Bodega Shop
          </Text>
          <Text > // style={styles.smallThinText}>
            DON’T GO WITHOUT
            THAT  ITEM YOUR LOCAL BODEGA
            CONVENIENTLY SELLS
          </Text>
          <Text > //style={styles.smallLightText}>
            GET IT DELIVERED
          </Text>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="VIEW BODEGAS NEAR ME"
          />
          </SafeAreaView>
        </View>
      </View>
      </ SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: App
  },
  {
    headerMode: 'none'
  });

  // NativeTachyons.build(heet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
  },
  bodyText: {
    fontFamily: 'RobotoSlab-Light',
    letterSpacing: 10,
    fontSize: 20,
    paddingTop: 100,
    color: 'white'
  },
  smallThinText: {
    fontFamily: 'RobotoSlab-Thin',
    letterSpacing: 8,
    fontSize: 10,
    textAlign: "center",
    paddingTop: 10,
    paddingRight: 20,
    lineHeight: 15,
    paddingLeft: 20,
    color: 'white'
  },
  smallLightText: {
    fontFamily: 'RobotoSlab-Light',
    letterSpacing: 8,
    fontSize: 10,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 100,
    paddingRight: 20,
    paddingLeft: 20,
    color: 'white'
  },
  image: {
    flex: 1,
    width: "100%"
  }
});


export default createAppContainer(AppNavigator);
