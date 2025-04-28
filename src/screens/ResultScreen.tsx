import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, Button } from 'react-native';
import { ACCENT_COLOR, SECONDARY_COLOR } from '../styles/colors';
import LottieView from 'lottie-react-native';
import { NO_SOUVENIR_URL } from '../utils/helper';

type ResultScreenProps = {
    souvenir: {
      name:string,
      imageUrl:string,
    };
  };

export default function ResultScreen() {

    const navigation = useNavigation()

    const route = useRoute()

  const { souvenir } = route.params as ResultScreenProps;

  const isSouvenirAvailable = souvenir && souvenir?.imageUrl !== NO_SOUVENIR_URL

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:SECONDARY_COLOR }}>
      <Text style={{ fontSize:24, marginBottom:10, color:'white' }}>{isSouvenirAvailable ? 'Congratulations!' : 'Oops, We are Sorry'}</Text>
      <Text style={{ fontSize:18, marginBottom:30, color:'white'}}>{
        isSouvenirAvailable? 'You got an awesome souvenir' : 'No souvenir left for you'}</Text>
      <View style={{ marginBottom:20 }}>
      {isSouvenirAvailable ? <LottieView source={require('../assets/animation/sprinkle.json')} autoPlay loop style={{ width: 200, height: 200, zIndex:100, position:'absolute', top:-100 }} /> : null}
        <Image source={{ uri: souvenir?.imageUrl }} style={{ width:200, height:200, borderRadius:16 }} />
      </View>
      {isSouvenirAvailable ? 
      <Text style={{ fontSize:16, width: '80%', textAlign:'center', marginBottom:10, color:ACCENT_COLOR, backgroundColor:'white', padding:16, borderRadius:16 }}>{souvenir?.name}</Text> : null}
      <View style={{ width: '80%', marginTop: 42, borderRadius: 16, overflow: 'hidden'}}>
      <Button 
      color={ACCENT_COLOR}
      title="Done" onPress={() => navigation.dispatch(StackActions.popToTop())} />
        </View>
    </View>
  );
}
