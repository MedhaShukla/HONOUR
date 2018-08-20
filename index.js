/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import User from './src/Scenes/user';
import Navigation from './src/Scenes/index.navigation';
import HomeScene from './src/Scenes/homeScene';
import Complete from './src/Scenes/Complete';
import completeScene from './src/Scenes/CompleteScene';
import Navigator from './src/navigation';
import {name as appName} from './app.json';
import CompleteScene from './src/Scenes/CompleteScene';

//import Navigation from './src/index.navigation';

AppRegistry.registerComponent(appName, () => Navigator);
