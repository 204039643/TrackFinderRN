import React, {useState} from 'react'
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
// import {TouchableOpacity} from 'react-native-gesture-handler';

const LogInScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //   console.log(route)
  //   const { screenNumber } = route.params

  // const credentials = Realm.Credentials.emailPassword(
  //   'atlsykes1@att.net',
  //   'tftest',
  // )
  // try {
  //   const user = await app.logIn(credentials)
  //   console.log('Successfully logged in!', user.id)
  //   return user
  // } catch (err) {
  //   console.error('Failed to log in', err.message)
  // }

  return (
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
        required='true'
        textContentType='username'
        autoCompleteType='username'
        autoCapitalize='none'
        style={styles.textInput}
        placeholder='UsainBolt1000'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{fontSize: 20}}>Password</Text>
      <TextInput
        required='true'
        textContentType='password'
        autoCompleteType='password'
        autoCapitalize='none'
        secureTextEntry='true'
        style={styles.textInput}
        placeholder='Pa$$Wurd'
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.subTo}
        onPress={() => {
          Alert.alert('Submit Button Pressed!')
          console.log(`email:${email}`)
          console.log(`password:${password}`)
        }}>
        <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  )
}

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
})

export default LogInScreen
