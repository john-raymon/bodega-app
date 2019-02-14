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
import { createSwitchNavigator, createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";

import ClearButton from './components/ClearButton'
import LandingScreen from './components/LandingScreen'
import s from "./styles";

const LandingStack = createStackNavigator(
  {
    Landing: LandingScreen
  },
  {
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Landing: LandingStack,
  },
  {
    initialRouteName: 'Landing',
  }
));


class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App
