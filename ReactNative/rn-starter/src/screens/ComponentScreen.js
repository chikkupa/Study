import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  const name = 'Chikku P A';

  return (
    <View>
      <Text style={styles.HeaderStyle}>Getting Started with ReactNative</Text>
      <Text style={styles.SubHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    fontSize: 45,
  },
  SubHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
