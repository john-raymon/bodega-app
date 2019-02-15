import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import StoreListing from './StoreListing'

import s from "./../styles";

class DashboardScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { validBubble } = this.props.screenProps
    return (
      <View style={[s.flx_i, s.jcfs, s.w100, s.aifs]}>
        <StoreListing validBubble={validBubble} />
      </View>
    );
  }
}

export default DashboardScreen;
