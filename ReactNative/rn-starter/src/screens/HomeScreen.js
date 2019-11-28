import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Home Page</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title={'Go to Components'}
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title={'Go to List'}
      />
      <Button onPress={() => navigation.navigate('Images')} title={'Images'} />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title={'Go toCounter'}
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title={'Go to Color'}
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title={'Go to Square'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
