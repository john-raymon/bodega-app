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
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer, SafeAreaView } from "react-navigation";

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

const DashboardStack = createStackNavigator({
    Dashboard: DashboardScreen
  },{
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Dashboard',
      header: props => <MainHeader {...props} />
    }),
    initialRouteName: 'Dashboard',
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
    },
    headerTintColor: "#fff",
    animationEnabled: true,
  })

const MainStack = createBottomTabNavigator({
    Dashboard: DashboardStack
  },
  {
  tabBarComponent: ({ navigation }) => {
      const { routeName } = navigation.state;
      console.log('current route name!', routeName)
      return (
        <View style={[s.bg_brandGray, s.w100, s.relative, s.h3_5]}>
          <SafeAreaView style={[s.flx_row, s.h100, s.w100, s.jcsb, s.ph4, s.aic, s.pt2]}>
            <Text style={[s.bodyText, s.whiteWash, s.f8]}>
              GET SUPPORT
            </Text>
          </SafeAreaView>
        </View>
      )
  },
  tabBarOptions: {
    showLabel: false
  }
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
  constructor(props) {
    super(props)
    this.state = {
      validBubble: false
    }
  }
  render() {
    return (
      <AppContainer screenProps={this.state}/>
    );
  }
}

export default App
