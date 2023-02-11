# React Native TWBoilPlRN-Typescript Template

React Native template with TWBoilPlRN configuration, ready to use.

## Generate a new project from this template

Click 'Use This Template' to create a new Github repo using this template. Then fill repository information for generating new project from this template.

Clone your repo and run `npm install` or `yarn install` on your terminal.

## Configuration
#### 1. Rename React Native Application
Change the name of your application in the file 'app.json'.

```json5
{
  "name": "yourapp.package", //without com.
  "displayName": "Your App Name"
}
```
> Don't use 'com.' in the name field (package name), because it will automatically be added when you do the next configuration.

After changing the information in `/app.json`, make sure `android` & `ios` has been deleted or not generated previously.
Then run following command:
```shell script
react-native eject
```
> If this command doesn't work, make sure you have run `yarn install` or `npm install` beforehand
>> and make sure the `android` & `ios` directory is not in the project directory.

After the android & ios folder has been generated, open the file `/android/app/build.gradle`. Add the line below:
```
apply plugin: "com.android.application"

// add this line
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"

...
```
> In some cases you will have to run a few commands to clean the cache. `yarn clean_android`

##### Test the application is work
Run the command below to run the application
```shell script
yarn android ENV=dev
```

#### 2. Set up application font
Put your font file into the `/app/Assets/fonts/` directory.

Then configure your font, so it's easy to use. Open the file `/app/Themes/typography.ts`, replace a few lines below:
```js
// example: Poppins-Regular.ttf -> so your 'regular' value => Poppins-Regular

const typography = {
  ...,
    decoration: {
        regular: 'YourFontName-Regular',
        bold: 'YourFontName-Bold',
        italic: 'YourFontName-Italic',
        boldItalic: 'YourFontName-BoldItalic',
    },
  ...,
};
```
After configuring the above, run the following command to link the fonts to the fonts folder in the android & ios directory:
```shell script
react-native link
```

## Project Structure
Here is the project directory structure tree:
```
/
|-- android
|-- ios
|-- app
    |-- Api
    |-- Assets
        |-- animations
        |-- fonts
        |-- icon
        |-- image
    |-- Components
        |-- base
    |-- Config
    |-- Constants
        |-- index.ts
        |-- static.js
    |-- I18n
        |-- strings
            |-- en.json
            |-- id.json
        |-- helper.ts
        |-- index.js
        |-- nskey.ts
    |-- Objects
    |-- Redux
        |-- const
        |-- middlewares.ts
        |-- storage.ts
        |-- store.ts
    |-- Router
        |-- lib
            |-- Base.tsx
            |-- generator.tsx
        |-- main
            |-- keys.ts
            |-- screens.ts
            |-- stack.tsx
        |-- index.tsx
        |-- keys.ts
    |-- Screens
        |-- strings
        |-- YourScreen.page
    |-- States
        |-- constants
        |-- yourData.reducer.ts
        |-- index.ts
    |-- Storage
        |-- fastStorage.ts
        |-- key.ts
    |-- Themes
        |-- colors.ts
        |-- typography.js
    |-- Types
    |-- Utils
|-- app.json
|-- index.js
```

### Directory Alias
You can use alias for accessing directory apps.
Here example:
```ts
import Colors from '@themes/colors'
```

| Alias Path | Real Path |
|---|---|
| @root | ./ |
| @app | ./app |
| @api | ./app/Api |
| @appTypes | ./app/Types |
| @components | ./app/Components |
| @constants | ./app/Constants |
| @lang | ./app/I18n |
| @router | ./app/Router |
| @redux | ./app/Redux |
| @themes | ./app/Themes |
| @utils | ./app/Utils |
| @screens | ./app/Screens |
| @states | ./app/States |
| @storage | ./app/Storage |


### How To..
#### Add new screen
Before you create a new screen, create a directory structure with a sample like this:
```
/app
|-- Screens
    |-- MyScreens
        |-- strings <- translation here
            |-- en.json
            |-- id.json
            |-- index.ts
        |-- index.tsx
        |-- style.tsx
|-- Router
    |-- main
        |-- keys.ts <- create your screen key name here
        |-- screens.ts <- list your screen here with generator
```

#### Add new components
Here's the folder structure of a global component in your project:
```
Components
|-- YourComponents
    |-- index.ts
    |-- style.ts
```

#### Add new assets (images or icons)
Put your image files in the directory `./app/Assets/images`, then don't forget to register your assets in the files available on the Themes.
```
/
|-- Assets      <-- put your image/icons asset here
    |-- Images
    |-- Icons
|-- Themes      <-- link/import your assets here
    |-- Images.js
    |-- Icons.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
