/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ScrollView, StatusBar,  } from 'react-native';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AccountCards from './src/component/Account';
import SectionHeading from './src/component/SectionHeading';
import Transactions from './src/component/Transactions';
import Categories from './src/component/Category';
import Dashboard from './src/component/Dashboard';


function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  // const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider >
      <ScrollView >
        <StatusBar barStyle={'light-content'} />
        <Dashboard />
        <AccountCards />
        <SectionHeading title='Recent Transactions' nextScreen>
          <Transactions />
        </SectionHeading>
        <SectionHeading title='Spending by Category'>
          <Categories />
        </SectionHeading>
      </ScrollView>
    </SafeAreaProvider>
  );
}


export default App;
