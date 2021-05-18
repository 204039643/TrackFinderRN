import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const LogInScreen = ({navigation, route}) => {
  //   console.log(route)
  //   const { screenNumber } = route.params

  return (
    // <View>
    <View style={styles.mainView}>
      <Header />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 45,
          marginTop: 45,
          padding: 20,
          fontFamily: 'Cochin',
        }}>
        WELCOME TO TRACK FINDER 2.0! PLEASE LOGIN.
      </Text>
      <Text style={{fontSize: 20}}>User Name</Text>
      <TextInput
        required="true"
        textContentType="username"
        autoCompleteType="username"
        autoCapitalize="none"
        style={styles.textInput}
        placeholder="UsainBolt1000"
      />
      <Text style={{fontSize: 20}}>Password</Text>
      <TextInput
        required="true"
        textContentType="password"
        autoCompleteType="password"
        autoCapitalize="none"
        secureTextEntry="true"
        style={styles.textInput}
        placeholder="Pa$$Wurd"
      />
      <TouchableOpacity
        style={styles.subTo}
        onPress={() => {
          Alert.alert('Submit Button Pressed!');
        }}>
        <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>

      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(206, 234, 234)',
    padding: 10,
    // fontFamily: 'Cochin',
  },
  textInput: {fontSize: 20, margin: 10, backgroundColor: 'white', width: 150},
  subTo: {
    marginBottom: 150,
  },
  submit: {
    color: 'blue',
    fontSize: 25,
    padding: 20,
    fontFamily: 'Cochin',
  },
});

export default LogInScreen;
