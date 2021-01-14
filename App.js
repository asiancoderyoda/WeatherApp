import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import Search from './screens/Search';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Search />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Image
          source={{
            uri:
              'https://st2.depositphotos.com/2306293/7723/i/600/depositphotos_77237624-stock-photo-happy-face-mug-on-the.jpg',
          }}
          style={styles.img}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    fontWeight: '700',
  },
  img: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;
