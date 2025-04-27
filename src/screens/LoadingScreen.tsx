// LoadingScreen.js
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { RootNavigationProp } from '../navigation/navigation';
// import { claimSouvenir } from '../firebase/firebase';

type LoadingScreenProps = {
  eventId: string;
};

export default function LoadingScreen() {
    const route = useRoute()

const navigation = useNavigation<RootNavigationProp>();

  const { eventId } = route.params as LoadingScreenProps;

  useEffect(() => {
    // const getSouvenir = async () => {
    //   try {
    //     const response = await claimSouvenir({ eventId });
    //     navigation.replace('Result', { souvenir: response.data });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // getSouvenir();

    setTimeout(() => {
      navigation.navigate('Result', { souvenir: eventId });
    }, 2000);
  }, [eventId]);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop:20 }}>Mencari souvenir terbaik untukmu...</Text>
    </View>
  );
}
