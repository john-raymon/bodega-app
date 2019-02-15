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
import MainHeader from './components/MainHeader'
import LandingScreen from './components/LandingScreen'
import DashboardScreen from './components/DashboardScreen'

import s from "./styles";

const LandingStack = createStackNavigator(
  {
    Landing: LandingScreen
  },
  {
    headerMode: 'none'
  }
);

const MainStack = createStackNavigator({
    Dashboard: {
      screen: DashboardScreen
    }
  },
  {
    defaultNavigationOptions: {
      title: 'Dashboard',
      header: props => <MainHeader {...props} />,
    },
    initialRouteName: 'Dashboard',
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
    },
    headerTintColor: "#fff",
    animationEnabled: true
  })

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Landing: LandingStack,
    Main: MainStack
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
