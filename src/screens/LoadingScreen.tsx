// LoadingScreen.js
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { RootNavigationProp } from '../navigation/navigation';
import { db } from '../../firebase';
import firestore from '@react-native-firebase/firestore';
import { NO_SOUVENIR_URL } from '../utils/helper';


type LoadingScreenProps = {
  eventId: string;
};

export default function LoadingScreen() {
    const route = useRoute()

const navigation = useNavigation<RootNavigationProp>();

  const { eventId } = route.params as LoadingScreenProps;

  const navigateToResultScreen = (name: string, imageUrl:string) => {
    navigation.dispatch(
      StackActions.replace('Result', {
      souvenir: {
        name: name,
        imageUrl: imageUrl,
      },
    })
    );
  };

  useEffect(() => {
    const getSouvenir = async () => {
      try {
        // Ambil semua souvenir yang belum diklaim
        const snapshot = await db
          .collection('events')
          .doc(eventId)
          .collection('souvenirs')
          .where('isClaimed', '==', false)
          .get();

        if (snapshot.empty) {
          navigateToResultScreen(
            'Tidak ada souvenir yang tersedia',
            NO_SOUVENIR_URL
          )
          return
        }

        const souvenirs = snapshot.docs.map(doc => ({ id: doc.id, name:doc.get('name'), imageUrl:doc.get('imageUrl'), ...doc.data() }));
        const randomSouvenir = souvenirs[Math.floor(Math.random() * souvenirs.length)];

        // Simpan klaim ke collection claims
        await db.collection('claims').add({
          eventId,
          souvenirId: randomSouvenir.id,
          claimedAt: firestore.FieldValue.serverTimestamp()
        });

        // Update souvenir menjadi claimed = true
        await db
          .collection('events')
          .doc(eventId)
          .collection('souvenirs')
          .doc(randomSouvenir.id)
          .update({ isClaimed: true });

        navigateToResultScreen(randomSouvenir.name?.toString() || '', randomSouvenir.imageUrl?.toString() || '');
      } catch (error) {
        console.error(error);
      }
    };

    getSouvenir();
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop:20 }}>Mencari souvenir terbaik untukmu...</Text>
    </View>
  );
}
