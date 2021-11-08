import React from 'react'
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'

// type Props = {};
const Navbar = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>TrackFinder RN</Text>
      <TouchableOpacity style={styles.menu}>
        <FontAwesomeIcon icon={faEllipsisV} size={10} style={styles.menu} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  menu: {
    color: '#383838',
    padding: 13,
    flexGrow: 5,
    alignSelf: 'flex-end',
  },
  button: {
    flexGrow: 5,
    padding: 15,
    // alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
  },
  header: {
    fontFamily: 'Cochin',
    fontSize: 30,
    padding: 13,
    fontWeight: '500',
  },
})

export default Navbar
