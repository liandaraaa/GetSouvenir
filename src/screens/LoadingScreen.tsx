// LoadingScreen.js
import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
// import { claimSouvenir } from '../firebase/firebase';

export default function LoadingScreen() {
//   const { eventId } = route.params;

//   useEffect(() => {
//     const getSouvenir = async () => {
//       try {
//         const response = await claimSouvenir({ eventId });
//         navigation.replace('Result', { souvenir: response.data });
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getSouvenir();
//   }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop:20 }}>Mencari souvenir terbaik untukmu...</Text>
    </View>
  );
}
