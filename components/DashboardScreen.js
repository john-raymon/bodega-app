import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView } from 'react-native';
import StoreListing from './StoreListing'
import OrderDashboardWidget from './OrderDashboardWidget'
import s from "./../styles";

class DashboardScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { validBubble } = this.props.screenProps
    return (
      <ScrollView>
      <View style={[s.flx_i, s.jcfs, s.w100, s.aifs, s.pt2]}>
          <StoreListing validBubble={validBubble} />
          { validBubble &&
            (<OrderDashboardWidget />)
          }
      </View>
      </ScrollView>
    );
  }
}

export default DashboardScreen;
