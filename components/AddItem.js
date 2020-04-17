import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddItem = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 23,
    Color: '#fff',
    textAlign: 'center',
  },
});
