import {
  DefaultTheme as PaperDefaultTheme,
  MD3Theme,
  useTheme,
} from 'react-native-paper';
import {DefaultTheme as NavigationTheme, Theme} from '@react-navigation/native';
import {MD3Colors} from 'react-native-paper/lib/typescript/src/types';
import {lightColors} from '@configs/theme/colors';

export type CustomColors = {
  onPrimary: string;
  background2: string;
  title: string;
  label: string;
  text: string;
  danger: string;
  grey1: string;
  grey2: string;
  grey3: string;
  bubble: string;
  textMessage: string;
  inputBackground: string;
  green: string;
};

export type AppThemeColors = MD3Colors & CustomColors;
export type AppTheme = MD3Theme & {
  colors: AppThemeColors;
};

export const lightTheme: AppTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  version: 3,
  colors: lightColors,
};

export const navigationTheme: Theme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
  },
};

export const useAppTheme = () => useTheme();
