// ScannerScreen.js
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text } from 'react-native';
import CameraKitCameraScreen from "react-native-camera-kit"

export default function ScannerScreen() {

    const navigation = useNavigation()
  const [isScanned, setIsScanned] = useState(false);

//   const onScan = () => {
//     if (!isScanned) {
//       setIsScanned(true);
//       const eventId = event.nativeEvent.codeStringValue; // QR Value
//       navigation.navigate('Loading', { eventId });
//     }
//   };

  return (
    // <CameraKitCameraScreen
    //   showFrame={true}
    //   scanBarcode={true}
    //   onReadCode={onScan}
    // />
    <Text>Halo Scan Here</Text>
  );
}
