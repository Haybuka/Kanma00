/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AccountCards from './src/component/AccountsCards';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>

        <Text>  Top Section</Text>
      </View>
      <AccountCards />
    </SafeAreaProvider>
  );
}


export default App;
