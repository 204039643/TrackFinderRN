import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, Button, Alert, Image} from 'react-native'
import {useAuth} from '../../providers/AuthProvider'
import styles from '../../stylesheet'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export function WelcomeScreen ({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp, signIn} = useAuth()

  useEffect(() => {
    // If there is a user logged in, go to the Search Track page.
    if (user != null) {
      navigation.navigate('SearchTrack')
    }
  }, [user])

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log('Press sign in')
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
    try {
      await signIn(email, password)
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`)
    }
  }

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    navigation.navigate('SignUp')
    // try {
    //   await signUp(email, password)
    //   signIn(email, password)
    // } catch (error) {
    //   Alert.alert(`Failed to sign up: ${error.message}`)
    // }
  }

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
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder='usainbolt1000@gmail.com'
          style={styles.inputStyle}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder='PA$$W0RD'
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
      <Button onPress={onPressSignIn} title='Sign In' />
      <Button onPress={onPressSignUp} title='Sign Up' />
      <Navbar />
    </View>
  )
}
