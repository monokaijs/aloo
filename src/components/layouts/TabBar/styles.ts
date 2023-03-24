import {getSize, height} from '@utils/reponsive.utils';
import {StyleSheet} from 'react-native';

export default function useStyles(colors) {
  return StyleSheet.create({
    contentBottomTab: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
      paddingTop: getSize.m(16),
    },
    itemTab: {
      flex: 1,
      // height: getSize.v(68),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
  });
}
