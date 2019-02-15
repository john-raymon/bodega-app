import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

import ClearButton from './ClearButton'

import s from "./../styles";


class LandingScreen extends Component {
  constructor(props) {
    super(props)
    console.log('hello', props)
  }
  render() {
    return (
      <View style={s.container}>
        <View style={s.container}>
          <Image source={require('./../images/hero1.jpg')} style={s.image}/>
          <Image source={require('./../images/hand-care.jpg')} style={s.image} />
          <View style={[s.bannerContainer, s.ph4]}>
            <Image
              resizeMode="contain"
              source={require('./../images/bodega_logo_png.png')}
              style={[s.asc, s.w100, s.max_w5_5, s.pa1]}
            />
            <Text style={[s.bodyText, s.whiteWash, s.tc, s.pv1]}>
              DON’T GO WITHOUT
              THAT ITEM YOUR LOCAL BODEGA
              CONVENIENTLY SELLS
            </Text>
            <Text style={[s.bodyTextLight, s.whiteWash, s.tc, s.pv1]}>
              GET IT DELIVERED
            </Text>
            <ClearButton
              onPress={() => {
                this.props.navigation.navigate('Main')
              }}
              text="VIEW BODEGAS NEAR ME"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LandingScreen;
