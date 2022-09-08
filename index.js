/**
 * @format
 */
import 'react-native-gesture-handler'; // added to prevent crash when swiping back on iOS
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
