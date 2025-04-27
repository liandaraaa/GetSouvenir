import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Welcome: {},
  Scanner: {}, 
  Loading : {},
  Result : {}
}

export type RootNavigationProp = NavigationProp<
 StackNavigationProp<RootStackParamList>
>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
