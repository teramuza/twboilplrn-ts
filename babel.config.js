module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "cwd": "babelrc",
      "extensions": [".js", ".ios.js", ".android.js"],
      "root": ["./app/"],
      "alias": {
        "@root": "./",
        "@app": "./app",
        "@api": "./app/Api",
        "@appTypes": "./app/Types",
        "@components": "./app/Components",
        "@constants": "./app/Constants",
        "@lang": "./app/I18n",
        "@router": "./app/Router",
        "@redux": "./app/Redux",
        "@themes": "./app/Themes",
        "@utils": "./app/Utils",
        "@screens": "./app/Screens",
        "@states": "./app/States",
        "@storage": "./app/Storage"
      }
    }]
  ],
};
