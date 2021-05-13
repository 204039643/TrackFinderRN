import * as React from 'react'
import {Button, View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignUpScreen from './src/screens/SignUpScreen'
import LogInScreen from './src/screens/LogInScreen'

function HomeScreen ({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Text>
        Welcome to Trackfinder 2.0! This is the HomeScreen placeholder.
      </Text>
      <Button title='Log in!' onPress={() => navigation.navigate('LogIn')} />
      <Button title='Sign Up!' onPress={() => navigation.navigate('SignUp')} />
    </View>
  )
}

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='LogIn' component={LogInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
