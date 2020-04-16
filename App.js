import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello WOrld</Text> */}
      <Header title="Shopping List" />
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
