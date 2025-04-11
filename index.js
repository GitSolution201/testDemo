/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import 'react-native-get-random-values';

// Text.defaultProps = {allowFontScaling: false};
// TextInput.defaultProps = {allowFontScaling: false};
Text.defaultProps = {maxFontSizeMultiplier: 1.2};

// Register background handler for Firebase messaging
messaging().setBackgroundMessageHandler(async remoteMessage => {});

const Root = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <App />
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => Root);
