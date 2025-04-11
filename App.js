import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Transactions from './src/screens/TransactionScreen';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <SafeAreaProvider>
      <Transactions />
    </SafeAreaProvider>
  );
};

export default App;
