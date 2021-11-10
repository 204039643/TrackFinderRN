import {StyleSheet} from 'react-native'
import {withOrientation} from 'react-navigation'

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  manageTeamWrapper: {
    width: 350,
  },
  manageTeamTitle: {
    marginBottom: 10,
  },
  addTeamMemberInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 5,
    fontSize: 18,
  },
  manageTeamButtonContainer: {
    textAlign: 'left',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  plusButton: {
    fontSize: 28,
    fontWeight: '400',
  },
  text: {
    fontSize: 50,
    padding: 30,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  link: {
    color: '#28b5b5',
    fontSize: 60,
    alignItems: 'center',
    padding: 40,
  },
  image: {
    marginTop: 10,
    height: 80,
    alignItems: 'center',
    padding: 20,
  },
  or: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Cochin',
  },
  button: {
    borderColor: 'black',
    borderWidth: 10,
    backgroundColor: 'blue',
    margin: 10,
  },
  unselected: {
    backgroundColor: 'yellow',
    margin: 5,
    width: 140,
    borderRadius: 10,
    padding: 5,
  },
  selected: {
    backgroundColor: 'lime',
    margin: 6,
    padding: 10,
    width: 140,
    borderRadius: 10,
  },
})

export default styles
