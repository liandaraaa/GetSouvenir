import { StyleSheet } from "react-native";
import { getWindowHeight, getWindowWidth } from "../utils/helper";

export const styles = StyleSheet.create({
    safeArea: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    camera: {
      width: '100%',
      height: 200,
    },
    fullScreenCamera: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1,
      zIndex: 100,
    },
    cameraControls: {
      height: '10%',
      top: 15,
      position: 'absolute',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      zIndex: 1000,
    },
    overlayContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1,
      zIndex: 100,
    },
    rectangle: {
      width: getWindowWidth() * 0.8, // 80% of screen width
      height: getWindowHeight() * 0.6, // 60% of screen height
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 2,
    },
    toolbar: {
      padding: 15,
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      flex: 1,
      zIndex: 100,
    },
    toolbarText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });