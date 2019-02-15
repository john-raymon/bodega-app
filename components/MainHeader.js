import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import { Header } from 'react-navigation'
import s from "./../styles";

class MainHeader extends Component {
  constructor(props){
    super(props)
    console.log('props inside header', props)
  }
  render(){
    return(
      <View style={[s.flx_i, s.h4, s.bg_brandGray, s.flx_wrap]}>
        <Image
          resizeMode="cover"
          source={require('./../images/header_background.jpg')}
          style={[s.image, s.w100, s.absolute_fill]}
        />
        <SafeAreaView style={[s.flx_i, s.jcfe, s.aic, s.flx_wrap]}>
          <Image
            resizeMode="contain"
            source={require('./../images/bodega_logo_png.png')}
            style={[s.w100, s.max_w5, s.asfs, s.asc]}
          />
          <Text style={[s.bodyTextLight, s.tc, s.asc, s.whiteWash]}>
          YOUR LOCAL BODEGAS,
          NOW DELIVER
          </Text>
        </SafeAreaView>
      </View>
    )
  }
}


export default MainHeader;
