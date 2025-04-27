import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import ResultScreen from './src/screens/ResultScreen';

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

type Props = {
  initialRouteName: InitialRouteName;
  params:{
    Welcome: {},
  Scanner: {
    setIsCameraShown: boolean;
    onReadCode: string;
  };
  Loading : {},
  Result : {}
  }
}

export default function App(props: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={props.initialRouteName}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
        />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
