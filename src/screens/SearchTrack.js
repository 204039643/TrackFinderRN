import React from 'react'
import {Button, View, Text, StyleSheet, TextInput, Alert} from 'react-native'
import Logout from '../components/Logout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import StateDropDownMenu from '../components/StateDropDownMenu.js'

function SearchTrack () {
  return (
    <View style={styles.mainView}>
      <Header />
      <Text style={{fontSize: 40}}>
        Search for a track near you or any city in the US.
      </Text>
      <Text style={{fontSize: 20}}>City</Text>
      <TextInput
        required='true'
        textContentType='addressCity'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 150,
        }}
        placeholder='Atlanta?'
      />
      <StateDropDownMenu />
      <Button
        title='SUBMIT'
        onPress={() => {
          Alert.alert('Submit Button Pressed!')
        }}
      />
      <Button
        title='Realm path'
        onPress={() => {
          Realm.open({}).then(realm => {
            console.log('Realm is located at: ' + realm.path)
          })
        }}
      />
      <Logout />
      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(206, 234, 234)',
  },
})

export default SearchTrack
