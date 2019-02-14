/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import NativeTachyons,{ styles as s } from "react-native-style-tachyons";
import { createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={s.container}>
        <View style={s.container}>
          <Image source={require('./images/perfect-breakfast-set.jpg')} style={s.image}/>
          <Image source={require('./images/hand-care.jpg')} style={s.image} />
          <SafeAreaView>
          <Text>
          The Bodega Shop
          </Text>
          <Text>
            DON’T GO WITHOUT
            THAT  ITEM YOUR LOCAL BODEGA
            CONVENIENTLY SELLS
          </Text>
          <Text styles={[s.absolute, s.top_12]}>
            GET IT DELIVERED
          </Text>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="VIEW BODEGAS NEAR ME"
          />
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: App
  },
  {
    headerMode: 'none'
  });


NativeTachyons.build({
    colors: {
        palette: {
           brandGray: "#2F2F2F"
        }
     }
  },
  { // patched create method for StyleSheet param for NativeTachyons.build method
    create: (tachyonsDraftStylesheet) => {
      let s = tachyonsDraftStylesheet
      // util styles
      const utils = {
          w100: {
            width: "100%"
          }
        }
      // global styles
      const globals = {
        container: StyleSheet.flatten([s.flx_i, s.jcc, s.bg_brandGray, utils.w100]),
        image: StyleSheet.flatten([s.flx_i, utils.w100])
      }
      const patchedDraftedStylesheet = {
          ...utils,
          ...globals,
          ...s
        }
      return StyleSheet.create(patchedDraftedStylesheet)
    }
  });


// const waitForS = new Promise((resolve, reject) => {
//     if (s.jcc !== undefined || s.jcc !== null) resolve(s);
//   })
// const containerStyle = StyleSheet.flatten(s.flex_i, s.jcc, s.bg_brandGray])


// waitForS.then((s) => {
//    utils = StyleSheet.create({
//       w100: {
//         width: "100%"
//       },
//       container: {width: "100%", ...StyleSheet.flatten([s.jcc, s.bg_brandGray, s.flx_i])}
//     })
//
//   console.log('just got done, this is container style and utils', utils)
//
//   })


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2F2F2F',
//   },
//   bodyText: {
//     fontFamily: 'RobotoSlab-Light',
//     letterSpacing: 10,
//     fontSize: 20,
//     paddingTop: 100,
//     color: 'white'
//   },
//   smallThinText: {
//     fontFamily: 'RobotoSlab-Thin',
//     letterSpacing: 8,
//     fontSize: 10,
//     textAlign: "center",
//     paddingTop: 10,
//     paddingRight: 20,
//     lineHeight: 15,
//     paddingLeft: 20,
//     color: 'white'
//   },
//   smallLightText: {
//     fontFamily: 'RobotoSlab-Light',
//     letterSpacing: 8,
//     fontSize: 10,
//     textAlign: "center",
//     paddingTop: 5,
//     paddingBottom: 100,
//     paddingRight: 20,
//     paddingLeft: 20,
//     color: 'white'
//   },
//   image: {
//     flex: 1,
//     width: "100%"
//   }
// });


export default createAppContainer(AppNavigator);
