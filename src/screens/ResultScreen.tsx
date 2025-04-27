import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, Button } from 'react-native';

type ResultScreenProps = {
    souvenir: string;
  };

export default function ResultScreen() {

    const navigation = useNavigation()

    const route = useRoute()

  const { souvenir } = route.params as ResultScreenProps;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      {/* <Image source={{ uri: souvenir.imageUrl }} style={{ width:200, height:200, marginBottom:20 }} /> */}
      <Text style={{ fontSize:24, marginBottom:10 }}>{souvenir}</Text>
      <Button title="Selesai" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
}
