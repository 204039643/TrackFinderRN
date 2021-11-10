import React from 'react'
import {Button, View, Text, StyleSheet, TextInput, Alert} from 'react-native'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import StateDropDownMenu from '../components/StateDropDownMenu.js'
import RadioButton from '../components/RadioButton'

function AddTrack () {
  const RBdata = [{value: 'Standard'}, {value: 'Non-standard'}]

  return (
    <View style={styles.mainView}>
      <Header />
      <Text style={{fontSize: 40}}>Let's add a new track!</Text>
      <Text style={{fontSize: 20}}>Track Name</Text>
      <TextInput required='true' placeholder='Name goes here' />
      <Text style={{fontSize: 20}}>Street Address</Text>
      <TextInput
        required='true'
        placeholder='Address goes here'
        textContentType='fullStreetAddress'
      />
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
      <Text style={{fontSize: 20}}>Zip Code</Text>
      <TextInput
        required='true'
        placeholder='30066'
        textContentType='postalCode'
      />
      <Text style={{fontSize: 20}}>Track Type</Text>
      <RadioButton data={RBdata} />
      <Text style={{fontSize: 20}}>Availability</Text>
      <TextInput
        placeholder='Add your availability notes here...'
        multiline='true'
        numberOfLines='3'
      />
      <Button
        title='CREATE TRACK'
        onPress={() => {
          Alert.alert('Submit Button Pressed!')
        }}
      />
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

export default AddTrack

// Track Name
// Street address
// City
// State (dropdown)
// Zip
// Track type (dropdown)
// Availability
