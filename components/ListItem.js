import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyCOntent: 'sapace-between',
    alignItems: 'center',
  },
  listItemText:{
    fontSize: 18,
  },
});

export default ListItem;
