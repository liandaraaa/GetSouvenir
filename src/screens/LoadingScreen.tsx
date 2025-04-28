// LoadingScreen.js
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RootNavigationProp } from '../navigation/navigation';
import { db } from '../../firebase';
import firestore from '@react-native-firebase/firestore';
import { NO_SOUVENIR_URL } from '../utils/helper';
import BouncingDotsView from '../components/BouncingDotsView';
import { ACCENT_COLOR, PRIMARY_COLOR } from '../styles/colors';


type LoadingScreenProps = {
  eventId: string;
};

export default function LoadingScreen() {
    const route = useRoute()

const navigation = useNavigation<RootNavigationProp>();

  const { eventId } = route.params as LoadingScreenProps;

  const navigateToResultScreen = (name?: string, imageUrl?:string) => {
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
            'No souvenir available',
            NO_SOUVENIR_URL,
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
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:PRIMARY_COLOR }}>
      <BouncingDotsView color={ACCENT_COLOR} />  {/* Custom color like Tomato Red */}
      <Text style={{ marginTop:10 }}>Please wait a moment..</Text>
      <Text style={{ marginTop:10 }}>We are looking for the best souvenir</Text>
      <Text style={{ marginTop:10 }}>for you</Text>
    </View>
  );
}
