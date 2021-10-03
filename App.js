import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import LogInScreen from './src/screens/LogInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import {WelcomeScreen} from './src/screens/WelcomeScreen'
import {AuthProvider} from './providers/AuthProvider'
import SearchTrack from './src/screens/SearchTrack'

const Stack = createStackNavigator()

function App () {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='SearchTrack' component={SearchTrack} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='LogIn' component={LogInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
