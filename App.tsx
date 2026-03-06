/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AccountCards from './src/component/Account';
import { Typography } from './src/component/Typography';
import SectionHeading from './src/component/SectionHeading';
import Transactions from './src/component/Transactions';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>

        <Text>  Top Section</Text>
      </View>
      <AccountCards />

      <SectionHeading title='Recent Transactions' nextScreen>
        <Transactions />
      </SectionHeading>
      <SectionHeading title='Spending by Category'>
        <Typography>Hi</Typography>
      </SectionHeading>
    </SafeAreaProvider>
  );
}


export default App;
