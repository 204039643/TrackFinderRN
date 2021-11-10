import React, {useState} from 'react'
import {Button, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import StateDropDownMenu from '../components/StateDropDownMenu.js'
let errorMessages = ''
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import RadioButton from '../components/RadioButton'

const AddTrack = () => {
  const [trackName, setTrackName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('default')
  const [zipCode, setZipCode] = useState('')
  const [trackType, setTrackType] = useState('standard')
  const [availability, setAvailability] = useState('')

  const RBdata = [
    {key: 1, value: 'Standard'},
    {key: 2, value: 'Non-standard'},
  ]
  let MLtext

  const onSubmit = e => {
    console.log(`track name: ${trackName}`)
    console.log(`street address: ${streetAddress}`)
    console.log(`city: ${city}`)
    console.log(`state: ${state}`)
    console.log(`zip code: ${zipCode}`)
    console.log(`Track type: ${trackType}`)
    console.log(`Availability: ${availability}`)
  }

  return (
    <ScrollView style={styles.mainView}>
      <Header />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 30,
        }}>
        LET'S ADD A NEW TRACK!
      </Text>
      <Text style={{fontSize: 20}}>Track Name</Text>
      <TextInput
        required='true'
        autoCapitalize='none'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 300,
        }}
        placeholder='My New Track'
        onChangeText={setTrackName}
        value={trackName}
      />
      <Text style={{fontSize: 20}}>Street Address</Text>
      <TextInput
        required='true'
        textContentType='fullStreetAddress'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 300,
        }}
        placeholder='Address goes here'
        onChangeText={setStreetAddress}
        value={streetAddress}
      />
      <Text style={{fontSize: 20}}>City</Text>
      <TextInput
        required='true'
        textContentType='addressCity'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 300,
        }}
        placeholder='City'
        onChangeText={setCity}
        value={city}
      />
      <Text style={{fontSize: 20}}>State</Text>
      <StateDropDownMenu />
      <Text style={{fontSize: 20}}>Zip Code</Text>
      <TextInput
        required='true'
        textContentType='postalCode'
        keyboardType='numeric'
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 125,
        }}
        placeholder='30000-1111'
        onChangeText={setZipCode}
        value={zipCode}
      />
      <Text style={{fontSize: 20}}>Track Type</Text>
      <RadioButton data={RBdata} onSelect={value => setTrackType(value)} />
      <Text style={{fontSize: 20}}>Availability Notes</Text>
      <TextInput
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
          width: 300,
        }}
        multiline
        placeholder='Enter track availability notes here...'
        onChangeText={setAvailability}
        value={availability}
      />

      <Button
        title='CREATE TRACK'
        onPress={() => {
          onSubmit()
        }}
      />
      <Navbar />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'rgb(206, 234, 234)',
  },
})

export default AddTrack
