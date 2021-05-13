import React from 'react';
import {Text, StyleSheet, View, Image, Button} from 'react-native';
import Header from '../components/Header';
// import Navbar from '../components/Navbar';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Image
        style={styles.image}
        source={{
          uri:
            'https://polar-castle-76740.herokuapp.com/assets/images/multiple-runners.png',
        }}
      />
      <Text style={styles.text}>
        Need help finding a track? We can help! To get started,
      </Text>
      /{' '}
      <Button title="Sign Up!" onPress={() => navigation.navigate('SignUp')} />
      {/* <Navbar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    padding: 40,
  },
  link: {
    color: '#28b5b5',
    fontSize: 60,
    alignItems: 'center',
    padding: 40,
  },
  image: {
    height: 80,
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
