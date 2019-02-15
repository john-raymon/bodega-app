import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import StoreListing from './StoreListing'

import s from "./../styles";

class DashboardScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[s.flx_i,{justifyContent: "flex-start"}, s.bg_brandGray, s.w100, s.aifs]}>
        <StoreListing />
      </View>
    );
  }
}

export default DashboardScreen;
