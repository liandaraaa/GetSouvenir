// WelcomeScreen.js
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../../App';

export default function WelcomeScreen() {

  const navigation = useNavigation<RootNavigationProp>()

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:32, marginBottom:20 }}>Welcome to GetSouvenir</Text>
      <Button title="Scan Barcode" 
      onPress={() => navigation.navigate('Scanner')} 
      />
    </View>
  );
}
