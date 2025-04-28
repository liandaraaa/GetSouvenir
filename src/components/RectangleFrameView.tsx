import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const RectangleFrameView = () => {
  const frameWidth = width * 0.8;
  const frameHeight = height * 0.5;
  const frameLeft = (width - frameWidth) / 2;
  const frameTop = (height - frameHeight) / 3;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.overlay, top: 0, left: 0, right: 0, height: frameTop }}></View>
      <View style={{ ...styles.overlay, top: frameTop + frameHeight, left: 0, right: 0, bottom: 0 }} />
      <View style={{ ...styles.overlay, top: frameTop, left: 0, width: frameLeft, height: frameHeight }} />
      <View style={{ ...styles.overlay, top: frameTop, right: 0, width: frameLeft, height: frameHeight }} />

      {/* Rectangle Border */}
      <View style={{
        position: 'absolute',
        top: frameTop,
        left: frameLeft,
        width: frameWidth,
        height: frameHeight,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 2,
        zIndex: 100,
      }} />


      {/* Text above Rectangle */}
      <View style={{
        position: 'absolute',
        top: frameTop - 50, // 50 pixels above the rectangle
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 100,
      }}>
        <Text style={styles.text}>
          Scan the QR Code
        </Text>
      </View>

      <View style={{  
        position: 'absolute',
        top: frameTop + frameHeight + 10, // 10 pixels below the rectangle
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 100,
      }}>
        <Text style={styles.subtext}>
          Scan the QR from the event, ask the event organizer for get the qr code
        </Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)', // dark background
    zIndex: 100,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default RectangleFrameView;
