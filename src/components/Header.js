import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>
        TrackFinder2.0 Hello, username{' '}
        <FontAwesomeIcon icon={faEllipsisV} style={styles.icon} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // textAlign: 'center',
    marginTop: 0,
    marginBottom: 12,
    marginLeft: 3,
  },
  icon: {
    marginLeft: 40,
    color: 'grey',
  },
});

export default Header;
