import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 21},
    {name: 'Friend #3', age: 32},
    {name: 'Friend #4', age: 34},
    {name: 'Friend #5', age: 27},
    {name: 'Friend #6', age: 28},
    {name: 'Friend #7', age: 21},
    {name: 'Friend #8', age: 27},
    {name: 'Friend #9', age: 29},
    {name: 'Friend #10', age: 33},
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={element => {
        return <Text style={styles.textStyle}>{element.item.name} - {element.item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal:10
  }
});

export default ListScreen;
