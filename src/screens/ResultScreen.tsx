import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button } from 'react-native';

export default function ResultScreen() {

    const navigation = useNavigation()
//   const { souvenir } = route.params;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      {/* <Image source={{ uri: souvenir.imageUrl }} style={{ width:200, height:200, marginBottom:20 }} /> */}
      <Text style={{ fontSize:24, marginBottom:10 }}>souvenir.name</Text>
      <Button title="Selesai" onPress={() => navigation.goBack} />
    </View>
  );
}
