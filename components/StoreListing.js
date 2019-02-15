import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, ImageBackground, FlatList, Button, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import s from "./../styles";

class StoreListing extends Component {
  constructor(props){
    super(props)
    console.log('props inside StoreListing', props)
  }

  render(){
    const isValidBubble = this.props.validBubble
    return(
      <View style={[s.flx_i, s.pv4]}>
        <Text style={[s.bodyTextBold, s.pl4]}>
          STORES NEAR YOU
        </Text>
        <View style={[s.w100, s.pl4]}>
        {
          !isValidBubble ?
          (
          <View style={s.shadow}>
          <ImageBackground
            source={require('./../images/stock_photo.jpg')}
            style={[s.br4, s.w5, s.h5, s.jcc, s.aic, s.mv3, s.overflowHidden]} >
              <View style={[s.absolute_fill, s.bg_black, s.o_80]}/>
              <Text style={[s.bodyTextLight, s.whiteWash, s.ph3, s.tl, s.f5]}>
                Sorry, there
                aren’t any participating
                stores near
                you
              </Text>
            </ImageBackground>
            </View>
          ) :
          (
            <FlatList
              horizontal={true}
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
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          )
        }

        </View>
      </View>
    )
  }
}


export default StoreListing;
