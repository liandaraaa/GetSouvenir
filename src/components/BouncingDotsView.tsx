import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { AnimatedValue } from 'react-navigation';

const BouncingDotsView = ({ color = '#6200ee' }) => {
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);
  const bounceAnim3 = new Animated.Value(0);

  const bounce = (anim:AnimatedValue) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -15,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  bounce(bounceAnim1);
  bounce(bounceAnim2);
  bounce(bounceAnim3);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.dot, { backgroundColor: color, transform: [{ translateY: bounceAnim1 }] }]}
      />
      <Animated.View
        style={[styles.dot, { backgroundColor: color, transform: [{ translateY: bounceAnim2 }] }]}
      />
      <Animated.View
        style={[styles.dot, { backgroundColor: color, transform: [{ translateY: bounceAnim3 }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    height: 50,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default BouncingDotsView;
