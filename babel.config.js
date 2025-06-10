module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      // Esta linha é essencial para o Drawer Navigator funcionar
      plugins: ['react-native-reanimated/plugin'],
    };
  };