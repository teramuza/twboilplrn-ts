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
        "@constants": "./app/Constants",
        "@router": "./app/Router",
        "@appTypes": "./app/Types",
        "@utils": "./app/Utils",
        "@lang": "./app/I18n",
        "@screens": "./app/Screens",
        "@themes": "./app/Themes",
        "@redux": "./app/Redux",
        "@components": "./app/Components",
        "@states": "./app/States"
      }
    }]
  ],
};
