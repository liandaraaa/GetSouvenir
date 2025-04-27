import { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Modal, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Camera,
    CameraRuntimeError,
    useCameraDevice,
    useCodeScanner,
  } from 'react-native-vision-camera';
import { useAppStateListener } from '../hooks/useAppState';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { isIos } from '../utils/helper';
import { styles } from '../styles/ScannerScreenStyle';
import { RootNavigationProp } from '../navigation/navigation';

export default function ScannerScreen() {

    const route = useRoute()

    const navigation = useNavigation<RootNavigationProp>()

  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  
  const isFocused = useIsFocused();
  const [isCameraInitialized, setIsCameraInitialized] = useState(isIos);
  const [isActive, setIsActive] = useState(isIos);
  const [flash, setFlash] = useState<'on' | 'off'>(isIos ? 'off' : 'on');
  const {appState} = useAppStateListener();
  const [codeScanned, setCodeScanned] = useState('');

  useEffect(() => {
    if (codeScanned) {
        navigation.navigate('Loading',{
            eventId: codeScanned
        })
    }
  }, [codeScanned]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCameraInitialized) {
      timeout = setTimeout(() => {
        setIsActive(true);
        setFlash('off');
      }, 1000);
    }
    setIsActive(false);
    return () => {
      clearTimeout(timeout);
    };
  }, [isCameraInitialized]);

  const onInitialized = () => {
    setIsCameraInitialized(true);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        if (codes[0].value) {
          setIsActive(false);
          setTimeout(() => setCodeScanned(codes[0]?.value || ''), 500);
        }
      }
      return;
    },
  });

  const onError = (error: CameraRuntimeError) => {
    Alert.alert('Error!', error.message);
  };

  useEffect(() => {

    const handleBackButton = () => {
        navigation.goBack()
        return true;
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );

    return () => backHandler.remove();
  }, []);

    return (
      <SafeAreaView style={styles.safeArea}>
        <Modal presentationStyle="fullScreen" animationType="slide">
          <View style={[styles.cameraControls, {backgroundColor: undefined}]} />
          {
            isFocused && device ?
            <Camera
            torch={flash}
            onInitialized={onInitialized}
            ref={camera}
            onError={onError}
            photo={false}
            style={styles.fullScreenCamera}
            device={device}
            codeScanner={codeScanner}
            isActive={
              isActive &&
              isFocused &&
              appState === 'active' &&
              isCameraInitialized
            }
          />
          : null
          }
        </Modal>
      </SafeAreaView>
    );
  }
