import React from 'react';
import {Button, View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const LogInScreen = ({navigation, route}) => {
  //   console.log(route)
  //   const { screenNumber } = route.params

  return (
    <View style={styles.mainView}>
      <Header />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 80,
        }}>
        WELCOME TO TRACK FINDER 2.0! PLEASE LOGIN.
      </Text>
      <Text style={{fontSize: 20}}>User Name</Text>
      <TextInput
        required="true"
        textContentType="username"
        autoCompleteType="username"
        autoCapitalize="none"
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150,
        }}
        placeholder="UsainBolt1000"
      />
      <Text style={{fontSize: 20}}>Password</Text>
      <TextInput
        required="true"
        textContentType="password"
        autoCompleteType="password"
        autoCapitalize="none"
        secureTextEntry="true"
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150,
        }}
        placeholder="Pa$$Wurd"
      />
      <Button
        title="SUBMIT"
        onPress={() => {
          Alert.alert('Submit Button Pressed!');
        }}
      />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(206, 234, 234)',
  },
});

export default LogInScreen;
