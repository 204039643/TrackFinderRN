import * as React from 'react'
import {Button, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useAuth} from '../../providers/AuthProvider'

const Logout = () => {
  const navigation = useNavigation()
  const {signOut} = useAuth()

  return (
    <Button
      title='Log Out'
      color='red'
      onPress={() => {
        console.log('Press log out')
        Alert.alert('Log Out', null, [
          {
            text: 'Yes, Log Out',
            style: 'destructive',
            onPress: () => {
              signOut()
              // navigation.popToTop()
            },
          },
          {text: 'Cancel', style: 'cancel'},
        ])
      }}
    />
  )
}

export default Logout
