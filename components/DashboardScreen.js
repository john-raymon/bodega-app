import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import MainHeader from './MainHeader'

import s from "./../styles";

class DashboardScreen extends Component {

  render() {
    return (
      <View style={[s.container, s.bg_whiteWash]}>
        <Text>
          D A S H B O A R D
        </Text>
      </View>
    );
  }
}

export default DashboardScreen;
