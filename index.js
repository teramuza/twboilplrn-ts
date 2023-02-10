/**
 * @format
 */

import { AppRegistry } from 'react-native';
import BaseApp from '@router/lib/Base';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => BaseApp);
