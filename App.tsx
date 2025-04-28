import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import AppNavigation from './src/navigation/navigation';
import { PRIMARY_COLOR } from './src/styles/colors';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={PRIMARY_COLOR}
      />
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;