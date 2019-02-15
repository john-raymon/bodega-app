import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import { Header } from 'react-navigation'
import s from "./../styles";

class MainHeader extends Component {
  constructor(props){
    super(props)
    console.log('props inside header', props)
  }
  render(){
    return(
      <ImageBackground
        source={require('./../images/header_background.jpg')}
        style={[s.h100, s.w100, s.pt5, s.pb3]}>

        <SafeAreaView style={[s.flx_i, s.jcfe, s.ph3, s.flx_wrap]}>
          <Image
            resizeMode="contain"
            source={require('./../images/bodega_logo_png.png')}
            style={[s.w100, s.max_w5_5, s.asfs, s.pr1]}
          />
          <Text style={[s.bodyTextLight, s.tl, s.asfs, s.whiteWash]}>
            {`YOUR LOCAL BODEGAS,\nNOW DELIVER`}
          </Text>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}


export default MainHeader;
