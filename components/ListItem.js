import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ListItem;
