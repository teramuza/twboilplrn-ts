import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure()
    .useReactNative({
        asyncStorage: false,
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/,
        },
        editor: false, // there are more options to editor
        overlay: false, // just turning off overlay
    })
    .use(reactotronRedux())
    .connect();

const connectConsoleToReactotron = () => {
    console.log = Reactotron.log;
    // console.warn = Reactotron.warn;
    // console.error = Reactotron.error;
};

// comment this if you want to show console.log in terminal instead of reactotron
if (__DEV__) {
    connectConsoleToReactotron();
}

export default reactotron;
