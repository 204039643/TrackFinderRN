import React, { Component } from 'react'
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import StateDropDownMenu from '../components/StateDropDownMenu.js'

const SignUpScreen = ({ navigation, route }) => {
  //   console.log(route)
  //   const { screenNumber } = route.params

  return (
    <View style={styles.mainView}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 80
        }}
      >
        WELCOME TO TRACK FINDER 2.0! PLEASE CREATE AN ACCOUNT.
      </Text>
      <Text style={{ fontSize: 20 }}>User Name</Text>
      <TextInput
        autoCompleteType='username'
        autoCapitalize='none'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150
        }}
        placeholder='UsainBolt1000'
      />
      <Text style={{ fontSize: 20 }}>Password</Text>
      <TextInput
        autoCompleteType='password'
        autoCapitalize='none'
        secureTextEntry='true'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150
        }}
        placeholder='Pa$$Wurd'
      />
      <Text style={{ fontSize: 20 }}>Home City</Text>
      <TextInput
        autoCompleteType='street-address'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150
        }}
        placeholder='Where do I live?'
      />
      <StateDropDownMenu />
      <Button
        title='SUBMIT'
        onPress={() => {
          Alert.alert('Submit Button Pressed!')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(206, 234, 234)'
  }
})

export default SignUpScreen
