import React, {useState} from 'react'
import {View, TextInput} from 'react-native'

const UselessTextInput = props => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  )
}

const MultilineText = data => {
  const [value, onChangeText] = useState()
  const MLTextHandler = value => {
    onChangeText(value)
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View>
      <UselessTextInput
        style={{
          fontSize: 20,
          margin: 10,
          backgroundColor: 'white',
        }}
        placeholder='Type availability notes here...'
        multiline
        numberOfLines={4}
        onChangeText={(text => onChangeText(text), MLTextHandler())}
        value={value}
      />
    </View>
  )
}

export default MultilineText
