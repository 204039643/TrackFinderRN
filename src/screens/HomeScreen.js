import * as React from 'react';
import {Text, StyleSheet, View, Image, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import Navbar from '../components/Navbar';

function HomeScreen({navigation}) {
  return (
    <View>
      {/* <Header /> */}
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
      <Button
        style={styles.button}
        title="Sign Up!"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text style={styles.or}>~OR~</Text>
      <Button
        style={styles.button}
        title="Log In!"
        onPress={() => navigation.navigate('LogIn')}
      />
      <Navbar />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    padding: 40,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  link: {
    color: '#28b5b5',
    fontSize: 60,
    alignItems: 'center',
    padding: 40,
  },
  image: {
    marginTop: 10,
    height: 80,
    alignItems: 'center',
    padding: 20,
  },
  or: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Cochin',
  },
  button: {
    borderColor: 'black',
    borderWidth: 10,
    backgroundColor: 'blue',
    margin: 10,
  },
});

export default HomeScreen;
