import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image,FlatList, ImageBackground, Button, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import s from "./../styles";

class OrderDashboardWidget extends Component {
  constructor(props){
    super(props)
    console.log('props inside OrderDashboardWidget', props)
  }
  render(){
    return(
      <View style={[s.shadow2, s.w100, s.aic, s.mt0]}>
        <View
          style={[{width: "85%"}, s.bg_whiteWash, s.br4, s.overflowHidden, s.mv2]}>
          <View style={[s.w100, s.flx_row, s.jcsb, s.aic, s.mv3, s.ph4, s.pt2]}>
            <Text style={[s.bodyTextBold, s.f8]}>
              YOUR ORDER
            </Text>
            <Text style={[s.bodyTextBold, s.f8]}>
              TOTAL : $ ----
            </Text>
          </View>
          <View style={[s.w100, s.h4]}>
            <FlatList
              data={[
                {storeName: 'Devin'},
                {storeName: 'Jackson'},
                {storeName: 'James'},
                {storeName: 'Joel'},
                {storeName: 'John'},
                {storeName: 'Jillian'},
                {storeName: 'Jimmy'},
                {storeName: 'Julie'},
              ]}
              renderItem={({item}) => <Text style={[s.w100, s.pv2, s.ph4]}>{item.storeName}</Text>}
            />
          </View>
          <View style={[s.w100, s.bg_brandGray, s.asfe, s.pv3, s.jcc, s.shadow3]}>
            <Text style={[s.bodyTextBold, s.f8, s.whiteWash, s.tc, s.pv2, s.tracked_mega]}>
              CHECKOUT
            </Text>
          </View>
        </View>
      </View>
    )
  }
}


export default OrderDashboardWidget;
