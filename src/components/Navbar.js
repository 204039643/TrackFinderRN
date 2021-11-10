import React from 'react'
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {
  faStream,
  faSearch,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons'
import {faExpeditedssl} from '@fortawesome/free-brands-svg-icons'
import {NavigationContainer} from '@react-navigation/native'

const Navbar = () => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faStream} size={40} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faShoePrints} size={40} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faSearch} size={40} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  // text: {
  //   fontSize: 20,
  //   // textAlign: 'center',
  //   marginTop: 0,
  //   marginBottom: 12,
  //   marginLeft: 3,
  // },
  icon: {
    color: '#383838',
  },
  button: {
    flexGrow: 5,
    padding: 15,
    alignItems: 'center',
  },
  view: {
    // marginTop: 50,
    flexDirection: 'row',
    position: 'relative',
    bottom: 0,
  },
})

export default Navbar
