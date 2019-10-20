import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const ImageDetail = props => {
  const {title, imageSource, score} = props;
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
