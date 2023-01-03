module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./"
      },
      "babel-module": {
        "node": {},
        "alias": {
          "@root": "./",
          "@app": "./app",
          "@components": "./src/components",
          "@api": "./app/Api",
          "@constants": "./app/Constants",
          "@router": "./app/Router",
          "@types": "./app/Types",
          "@utils": "./app/Utils"
        }
    },
    }
  },
};
