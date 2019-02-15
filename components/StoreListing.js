import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import s from "./../styles";

class StoreListing extends Component {
  constructor(props){
    super(props)
    console.log('props inside StoreListing', props)
  }
  render(){
    return(
      <View style={[s.flx_i, {justifyContent: "flex-start"}]}>
        <Text style={[s.bodyTextBold, s.whiteWash]}>
          STORES NEAR YOU
        </Text>
      </View>
    )
  }
}


export default StoreListing;
