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
        "@types": "./app/Types",
        "@utils": "./app/Utils"
      }
    }]
  ],
};
