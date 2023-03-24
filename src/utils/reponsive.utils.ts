import {Dimensions, Platform, StatusBar} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const {width, height} = Dimensions.get('window');
export const statusBarHeight: number = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;
/**
 *
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/
export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};

export const isIos = Platform.OS === 'ios';
