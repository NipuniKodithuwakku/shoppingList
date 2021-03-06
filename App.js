import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import {uuid} from 'uuid4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItem.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    if(!text){
      Alert.alert('Error',"please Enter an Item", {text:'ok'});

    }else{
      setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  }
   
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello WOrld</Text> */}
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      /> */}
    </View>
  );
};



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
export default App;
