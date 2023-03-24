module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@configs': './src/configs',
          '@navigations': './src/navigations',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@i18n': './src/i18n',
        },
      },
    ],
    // Make sure this is the last one.
    'react-native-reanimated/plugin',
  ],
};
