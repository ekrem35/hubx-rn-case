module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './app/components',
          assets: ['./app/assets'],
        },
      },
    ],
  ],
};
