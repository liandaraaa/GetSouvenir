import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // or MaterialIcons, FontAwesome, etc.

type ToolbarProps = {
  title?: string;
  onBackPress: () => void;
};

const Toolbar = ({ title, onBackPress }:ToolbarProps) => {
  return (
    <View style={styles.toolbar}>
      {/* Left: Icon Button */}
      <TouchableOpacity onPress={onBackPress} style={styles.sideButton}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Center: Title */}
      {title && 
      <Text style={styles.title}>{title}</Text>}

      {/* Right: Empty space */}
      <View style={styles.sideButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    zIndex:1000
  },
  sideButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Toolbar;
