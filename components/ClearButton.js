import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity} from 'react-native';
import s from "./../styles";

class ClearButton extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text style={[s.bodyTextLight, s.whiteWash, s.tc, s.pv2, s.ba, s.br3, s.b__whiteWash, s.ph3, s.mv3]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}


export default ClearButton;
