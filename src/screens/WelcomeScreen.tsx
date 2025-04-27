// WelcomeScreen.js
import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../navigation/navigation';
import { useState } from 'react';
import { EPermissionTypes, usePermissions } from '../hooks/usePermission';
import { RESULTS } from 'react-native-permissions';
import { goToSettings } from '../utils/helper';

export default function WelcomeScreen() {

  const navigation = useNavigation<RootNavigationProp>()

  const [cameraShown, setCameraShown] = useState(false);

  const {askPermissions } = usePermissions(EPermissionTypes.CAMERA)


  const navigateToScanner = ()=>{
    navigation.navigate('Scanner')
  }

  const takePermissions = async () => {
    askPermissions()
      .then(response => {
        //permission given for camera
        if (
          response.type === RESULTS.LIMITED ||
          response.type === RESULTS.GRANTED
        ) {
          setCameraShown(true);
          navigateToScanner()
        }
      })
      .catch(error => {
        //permission is denied/blocked or camera feature not supported
        if ('isError' in error && error.isError) {
          Alert.alert(
            error.errorMessage ||
              'Something went wrong while taking camera permission',
          );
        }
        if ('type' in error) {
          if (error.type === RESULTS.UNAVAILABLE) {
            Alert.alert('This feature is not supported on this device');
          } else if (
            error.type === RESULTS.BLOCKED ||
            error.type === RESULTS.DENIED
          ) {
            Alert.alert(
              'Permission Denied',
              'Please give permission from settings to continue using camera.',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Go To Settings', onPress: () => goToSettings()},
              ],
            );
          }
        }
      });
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:32, marginBottom:20 }}>Welcome to GetSouvenir</Text>
      <Button title="Scan Barcode" 
      onPress={() => cameraShown ? navigateToScanner(): takePermissions()} 
      />
    </View>
  );
}
