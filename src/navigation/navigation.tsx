import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ResultScreen from '../screens/ResultScreen';

type RootStackParamList = {
  Welcome: {},
  Scanner: {
    setIsCameraShown: boolean;
    onReadCode: (value:string)=>void;
  };
  Loading : {},
  Result : {}
}


export type InitialRouteName = keyof RootStackParamList;

export type RootNavigationProp = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
        />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
  );
}
