// ScannerScreen.js
import { useState } from 'react';
import { View, Text } from 'react-native';
// import { CameraKitCameraScreen } from 'react-native-camera-kit';

export default function ScannerScreen() {
  const [isScanned, setIsScanned] = useState(false);

//   const onScan = (event) => {
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
    <Text>Halo</Text>
  );
}
