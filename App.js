import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import LogInScreen from './src/screens/LogInScreen'
import SignUpScreen from './src/screens/SignUpScreen'

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
