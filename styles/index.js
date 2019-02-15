import { StyleSheet, Dimensions } from 'react-native';
import NativeTachyons, { styles as s } from "react-native-style-tachyons";

const { width:screenWidth } = Dimensions.get('window');

NativeTachyons.build({
  rem: screenWidth > 340 ? 16 : 12,
  colors: {
    palette: {
      brandGray: "#2F2F2F",
      whiteWash: "#F7F7F7",
      black: "black"
    }
  },
  fonts: {
    robotoSlabLight: 'RobotoSlab-Light',
    robotoSlabThin: 'RobotoSlab-Thin',
    robotoSlabBold: 'RobotoSlab-Bold'
  }
},
{ // patched create method for StyleSheet param for NativeTachyons.build method
  create: (tachyonsDraftStylesheet) => {
    let s = tachyonsDraftStylesheet

    // util styles
    const utils = {
        w100: {
          width: "100%"
        },
        h100: {
          height: "100%"
        },
        max_w5_5: {
          maxWidth: 300
        },
        h3_5: {
          height: 90
        },
        h5_5: {
          height: 300
        },
        f7: {
          fontSize: 12
        },
        f8: {
          fontSize: 10
        },
        jcfs: {
          justifyContent: "flex-start"
        },
        overflowHidden: {
          overflow: "hidden"
        },
        shadow: {
          shadowOpacity: 0.50,
          shadowRadius: 18,
          shadowColor: 'black',
          shadowOffset: { height: 5, width: 5 }
        },
        shadow2: {
          shadowOpacity: 0.20,
          shadowRadius: 15,
          shadowColor: 'black',
          shadowOffset: { height: 0, width: 2 }
        }
      }

    // global styles
    const globals = {
      container: StyleSheet.flatten([s.flx_i, s.jcc, s.aic, s.bg_brandGray, utils.w100, s.flx_wrap]),
      bannerContainer: StyleSheet.flatten([s.flx_i, s.aic, s.bg_brandGray, utils.w100, s.jcc]),
      image: StyleSheet.flatten([s.flx_i, utils.w100]),
    }

    // typography
    const typography = {
      bodyText: StyleSheet.flatten([s.ff_robotoSlabThin, utils.f7, s.tracked_mega, s.lh_solid]),
      bodyTextLight: StyleSheet.flatten([s.ff_robotoSlabLight, utils.f7, s.tracked_mega]),
      bodyTextBold: StyleSheet.flatten([s.ff_robotoSlabBold, utils.f7, s.tracked_mega]),
    }

    const patchedDraftedStylesheet = {
        ...utils,
        ...globals,
        ...typography,
        ...s
      }
    return StyleSheet.create(patchedDraftedStylesheet)
  }
});

console.log('THE STYLES ARE ~~~~>', s)

export default s;
