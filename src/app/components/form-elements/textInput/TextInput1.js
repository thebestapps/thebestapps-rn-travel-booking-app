import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextInput1 = ({ name, placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      name={name}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default TextInput1;