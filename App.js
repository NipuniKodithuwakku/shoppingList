import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import {uuid} from 'uuid4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello WOrld</Text> */}
      <Header title="Shopping List" />
      <FlatList />
      {/* <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // align: 'center',
    paddingTop: 60,
  },
  // text: {
  //   color: 'darkslateblue',
  //   fontSize: 30,
  // },
  // img: {
  //   height: 100,
  //   width: 100,
  //   borderRadius: 100 / 2,
  // },
});
