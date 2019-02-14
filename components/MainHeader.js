import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { Header } from 'react-navigation'
import s from "./../styles";

class MainHeader extends Component {
  constructor(props){
    super(props)
    console.log('props inside header', props)
  }
  render(){
    return(
      <View style={[s.bg_brandGray, s.h4, s.w100]}>
        
      </View>
    )
  }
}


export default MainHeader;
